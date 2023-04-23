package edu.pnu;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import edu.pnu.domain.TodoList;
import edu.pnu.persistence.TodoListRepository;

@SpringBootTest
class TodoListApplicationTests {

	@Autowired
	TodoListRepository tr;
	
	
	@Test
	void contextLoads() {
	}

	@Test
	void insertData() {
		TodoList tl = new TodoList();
		tl.setId((long) 1);
		tl.setText("테스트");
		tr.save(tl);
		
		
	}
	
}
