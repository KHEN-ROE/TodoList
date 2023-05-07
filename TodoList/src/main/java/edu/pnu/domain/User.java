package edu.pnu.domain;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
public class User { // 부모 테이블(한 명의 사용자가 여러 개의 todolist가질 수 있으므로 일대다 관계
	
	@Id
	@Column(name = "email")
	private String email;
	private String name;
	private String locale;
	
}
