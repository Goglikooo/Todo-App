using Todo.API.Models;

namespace Todo.API
{
    public class TodoItemsDataStore
    {
        public List<TodoItem> TodoItems { get; set; }

        public static TodoItemsDataStore Current { get;} = new TodoItemsDataStore();

        private int _test = 0;
        public int test
        {
            get => _test++;
        }
        public TodoItemsDataStore() 
        {
            TodoItems = new List<TodoItem>();

        }
    }
}
