using Microsoft.AspNetCore.Mvc;
using Microsoft.OpenApi.Any;
using Todo.API.Models;

namespace Todo.API.Controllers
{
    [ApiController]
    [Route("api/todoItems")]
    public class TodoItemsController : ControllerBase
    {

        

        [HttpGet(Name = "GetTodoItems")]
        public JsonResult GetTodoItems()
        {

            return new JsonResult(TodoItemsDataStore.Current.TodoItems);
        }

        [HttpPost("{id}/{value}")]
        public ActionResult<TodoItem> CreateTodoItem(string value, int id)
        {

            var lastIndex = TodoItemsDataStore.Current.TodoItems.Any()? TodoItemsDataStore.Current.TodoItems.Last().Id+1 : 0;
 

            var todoItem = new TodoItem()
            {
                Id = lastIndex,
                Value = value,
                Done = false,

            };

            TodoItemsDataStore.Current.TodoItems.Add(todoItem);
            return CreatedAtRoute("GetTodoItems", new
            {
                TodoId = todoItem.Id,
                TodoValue = todoItem.Value,
            }, todoItem
                );
        }

        [HttpPut("update/{id}")]
        public ActionResult<TodoItem> MarkAsDone(int id)
        {
            var item = TodoItemsDataStore.Current.TodoItems[id];
            item.Done = !item.Done;
            return Ok();
        }

        [HttpPut("update/all")]
        public ActionResult<TodoItem> MarkAllDone()
        {
            var items = TodoItemsDataStore.Current.TodoItems;

            foreach(var item in items)
            {
                if(!item.Done)
                {
                    item.Done = !item.Done;
                }
                
            }

            
            return Ok();
        }

        [HttpDelete("delete/all")]
        public ActionResult<TodoItem> DeleteAll()
        {
            var items = TodoItemsDataStore.Current.TodoItems;
            items.Clear();
            return Ok();
        }
    }
}
