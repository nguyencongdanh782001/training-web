import { Field, Form, Formik } from "formik";
import { useContext, useState } from "react";
import * as Yup from "yup";
import { TodoContext } from "../../../context/todoContext";
import "./style.scss";

const TodoContextPage = () => {
  const todoList = useContext(TodoContext);
  console.log(todoList);
  const [isEdit, setIsEdit] = useState({ id: "", bool: false });
  const [initialValueFormAdd, setInitialValueFormAdd] = useState({
    name: "",
    age: "",
  });
  const handleAdd = ({ values, actions }: any) => {
    if (isEdit.bool) {
      todoList.editTodo({ ...values, id: isEdit.id });

      setIsEdit({ id: "", bool: false });
    } else {
      todoList.addTodo({ ...values, id: Math.random() });
    }
    setInitialValueFormAdd({
      name: "",
      age: "",
    });
    actions.resetForm();
  };

  const handleDelete = (id: string) => {
    todoList.deleteTodo(id);
  };

  const handleOnClickEdit = (id: any) => {
    const data = todoList.todos.find((item: any) => item.id === id);
    setInitialValueFormAdd({
      name: data?.name || "",
      age: data?.age || ("" as any),
    });
    setIsEdit({ id, bool: true });
  };

  const handleCancelEdit = () => {
    setInitialValueFormAdd({
      name: "",
      age: "",
    });
    setIsEdit({ id: "", bool: false });
  };
  const validateSchemaFormAdd = Yup.object({
    name: Yup.string()
      .min(8, "Must be at least 8 characters")
      .required("this field is required"),
    age: Yup.number().required("this field is required"),
  });
  const [searchValue, setSearchValue] = useState("");
  const handleSearch = (e: any) => {
    e.preventDefault();
    todoList.searchTodo(searchValue);
  };
  return (
    <div className="todo-container container">
      <div className="top-todo">
        <div className="left">
          <Formik
            enableReinitialize
            initialValues={initialValueFormAdd}
            validationSchema={validateSchemaFormAdd}
            onSubmit={(values, actions) => handleAdd({ values, actions })}
          >
            {(props: any) => (
              <Form>
                <div>
                  <Field
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.name}
                  />
                  {props.touched.name && props.errors.name ? (
                    <span style={{ color: "red" }}>{props.errors.name}</span>
                  ) : null}
                </div>
                <div>
                  <Field
                    type="number"
                    name="age"
                    placeholder="Age"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.age}
                  />
                  {props.touched.age && props.errors.age ? (
                    <span style={{ color: "red" }}>{props.errors.age}</span>
                  ) : null}
                </div>
                {isEdit.bool ? (
                  <>
                    <button type="submit">Edit</button>
                    <button type="button" onClick={handleCancelEdit}>
                      Cancel
                    </button>
                  </>
                ) : (
                  <button type="submit">Add</button>
                )}
              </Form>
            )}
          </Formik>
        </div>
        <div className="right">
          <form className="search-form" onSubmit={(e) => handleSearch(e)}>
            <input
              type="text"
              name="search"
              placeholder="serach"
              onChange={(e) => setSearchValue(e.target.value)}
              value={searchValue}
            />
            <button type="submit">search</button>
          </form>
        </div>
      </div>
      <div className="bottom-todo">
        {(todoList.searchData.length > 0 && searchValue
          ? todoList.searchData
          : todoList.todos
        ).map((item: any, index: any) => (
          <div className="todo-item" key={item.id}>
            <div className="left-item-todo">
              <p>name: {item.name}</p>&ensp;|&ensp;
              <p>age: {item.age}</p>
            </div>
            <div className="right-item-todo">
              <button onClick={() => handleDelete(item.id)}>delete</button>
              <button onClick={() => handleOnClickEdit(item.id)}>edit</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoContextPage;
