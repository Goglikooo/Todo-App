﻿namespace Todo.API.Models
{
    public class TodoItem
    {
        public int Id { get; set; }
        public string Value { get; set; } = string.Empty;
        public bool Done { get; set; }
    }
}
