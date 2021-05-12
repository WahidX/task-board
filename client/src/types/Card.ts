interface Card {
	id: ID;
	title: String;
	content: String;
	hasTodo: Boolean;
	todo?: Todo;
	timestamp: Date;
}

interface Todo {
	completed: TodoItem[];
	incompleted: TodoItem[];
}

interface TodoItem {
	content: String;
	isComplete: Boolean;
	timestamp: Date;
}
