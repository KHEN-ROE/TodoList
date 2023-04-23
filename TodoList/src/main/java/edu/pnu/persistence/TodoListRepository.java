package edu.pnu.persistence;

import org.springframework.data.repository.CrudRepository;

import edu.pnu.domain.TodoList;

public interface TodoListRepository extends CrudRepository<TodoList, Long> {
	

}
