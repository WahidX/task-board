interface Card {
	id: ID;
	title: String;
	content: String;
	hasTodo: Boolean;
	todo?: Todo;
	parentType: CardParentType;
	parent: ID;
	timestamp: Date;
}

enum CardParentType {
	notebook = "notebooks",
	taskboard = "taskborads",
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
