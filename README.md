# TodoList
> 본 TodoList 애플리케이션은 사용자가 할 일을 추가, 수정, 삭제할 수 있는 웹 애플리케이션입니다.

## 시작하기

> 본 애플리케이션은 React와 Spring Boot를 연결하여 개발하였습니다.

> 따라서 이 애플리케이션을 실행하기 위해서는 아래에서 요구하는 도구들이 필요합니다.

### 사전 요구 사항

> 스프링 프로젝트
 - Java JDK 17 버전이 설치되어 있어야 합니다.
 - 스프링 프레임워크 5.3.13 버전을 사용합니다.
 - 스프링 부트 2.7.11 버전을 사용합니다
 - 스프링 시큐리티 5.6.2 버전을 사용합니다.
 - MySQL 서버와 MySQL Workbench가 설치되어 있어야 합니다.
 - 구글 OAuth 2.0 인증을 사용하기 위해, 해당 서비스의 개발자 등록 및 설정이 필요합니다.(https://console.cloud.google.com/apis)
 
> 리액트 프로젝트
 - Node.js가 설치되어 있어야 합니다
 - 리액트 프레임워크 버전은 프로젝트에 따라 다를 수 있으며, 이에 따라 필요한 모듈이 다를 수 있습니다.
 - 프로젝트에서 사용하는 외부 라이브러리에 따라 추가적인 사전 요구 사항이 있을 수 있습니다.
 
 <br />
 
### 설치 및 실행

> 1. 깃허브에서 프로젝트를 클론합니다.
```javascript
git clone https://github.com/KHEN-ROE/TodoList.git
```
<br />

> 2. 프론트엔드 디렉토리에서 필요한 패키지를 설치합니다.
```javascript
npm install
npm install jwt-decode
```
<br />

> 3. application.properties 설정을 다음과 같이 저장합니다.
```javascript
spring.main.web-application-type=servlet
server.port=8080
spring.main.banner-mode=off
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.datasource.url=jdbc:mysql://localhost:3306/db_name?serverTimezone=UTC&characterEncoding=UTF-8
spring.datasource.username=your_name
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
spring.jpa.generate-ddl=false
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true
spring.jpa.database-platform=org.hibernate.dialect.MySQL8Dialect
logging.level.org.hibernate=INFO
logging.level.org.springframework.security=debug
spring.servlet.multipart.enabled=false
spring.servlet.multipart.location=C:/upload/
spring.servlet.multipart.max-request-size=30MB
spring.servlet.multipart.max-file-size=10MB
```
<br />

> 4. 리액트와 스프링부트 프로젝트를 각각 실행합니다.

<br />

## 기능
 - 사용자는 로그인하여 자신의 할 일 목록을 볼 수 있습니다.
 - 사용자는 할 일을 등록할 수 있습니다.
 - 사용자는 할 일을 수정할 수 있습니다.
 - 사용자는 할 일을 삭제할 수 있습니다.
 
 ## 사용된 기술
  - Frontend: React
  - Backend: Spring Boot
  - Database: MySQL
  - 인증 및 로그인: OAuth 2.0
  - AWS(예정)
 
 ## ERD
 <figure align="center">
  <img src="https://github.com/KHEN-ROE/TodoList/blob/main/image/erd.png">
</figure>
 
 ## 개발자 정보
 - Name : KEN
 - Email: shdnrnjs@gmail.com
 - Github : http://github.com/KHEN-ROE
 
 ## 기여방법
  - 버그나 기능 개선 제안은 이슈로 등록해주세요.
 
 ## 라이센스
 
 + 이 프로젝트는 [MIT 라이센스](LICENSE) 하에 배포됩니다.
