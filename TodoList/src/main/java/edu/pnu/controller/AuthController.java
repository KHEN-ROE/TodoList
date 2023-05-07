package edu.pnu.controller;

import java.nio.charset.StandardCharsets;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Date;

import javax.crypto.SecretKey;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.view.RedirectView;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.JwtParser;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

@RestController
public class AuthController {

	@GetMapping("/loginSuccess")
	public RedirectView loginSuccess(@AuthenticationPrincipal OAuth2User principal) { 
		System.out.println("사용자 정보: " + principal.getAttributes());

		// JWT 생성
		String JWT = createJWT(principal);

		// JWT 디코딩 및 "aud" 클레임 값 출력
		SecretKey secretKey = Keys
				.hmacShaKeyFor("your_own_key".getBytes(StandardCharsets.UTF_8));
		JwtParser parser = Jwts.parserBuilder().setSigningKey(secretKey).build();
		Jws<Claims> jws = parser.parseClaimsJws(JWT);
		String audClaim = jws.getBody().get("aud", String.class);
		System.out.println("Audience claim in the token: " + audClaim);

		RedirectView redirectView = new RedirectView("http://localhost:3000?token=" + JWT);
		return redirectView;
	}

	private String createJWT(OAuth2User principal) {
		// JWT 생성 로직 구현 (예: 토큰 만료 시간, 서명 등)
		// 사용자 정보에서 필요한 부분을 가져와 토큰에 포함시킴
		// 여기서는 사용자의 이메일, 이름, 지역을 토큰의 subject로 사용.
		String email = principal.getAttribute("email");
		String name = principal.getAttribute("name");
	    String locale = principal.getAttribute("locale");
		Instant now = Instant.now();
		Instant expiry = now.plus(1, ChronoUnit.HOURS);

		SecretKey secretKey = Keys
				.hmacShaKeyFor("your_own_key".getBytes(StandardCharsets.UTF_8));
		final String AUDIENCE = "your_own_id";

		String jwt = Jwts.builder().setSubject(email)
				.claim("name", name) 
				.claim("locale", locale) //토큰에 이메일, 이름, 지역 추가
				.setIssuer("https://accounts.google.com").setAudience(AUDIENCE) // 클라이언트 ID를 audience로 추가																														
				.setIssuedAt(Date.from(now)).setExpiration(Date.from(expiry))
				.signWith(secretKey) // 생성된 키를 사용하여 서명
				.compact();
		System.out.println("Generated JWT: " + jwt);

		return jwt;
	}

//	@GetMapping("/loginFailure")
//	public RedirectView loginFailure() {
//		redirectView.setUrl("http://localhost:3000");
//		return redirectView;
//	}
}
