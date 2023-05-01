package edu.pnu.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.pnu.domain.TodoList;
import edu.pnu.persistence.TodoListRepository;

@Service
public class TodoListService {
	
	@Autowired
	TodoListRepository tr;

	
	public List<TodoList> getLists(){
		return (List<TodoList>) tr.findAll();
	}
	
	public TodoList addList(TodoList todolist) {
		System.out.println("Saving todo item: " + todolist);
//		TodoList newTodoList = new TodoList();
//	    newTodoList.setText(todolist.getText());
//	    return tr.save(newTodoList);
	    return tr.save(todolist);
	}
	
	public TodoList updateList(TodoList todolist, Long id) {
		TodoList tl = tr.findById(id).get();
		tl.setText(todolist.getText());
		return tr.save(tl);
	}
	
	public void deleteList(Long id) {
		tr.deleteById(id);
	}
}
