const toDoForm = document.querySelector('#todo-form');
const toDoInput =document.querySelector('#todo-form input');
const toDoList = document.querySelector('#todo-list');

const TODOS_KEY = 'todos'

let toDos = []; //7. todolist 배열 만들기 (언제나 비어있는 배열로 시작하지 않게 할 것이기때문에 let으로 지정)

function saveToDos(){  //6. 리스트 세로고침할때마다 없어지고 있음. 만든 todolist배열 localStorage에 저장
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)) //9. toDos를 그냥 setItem하면 배열형식으로 저장되지 않음. 배열로 저장되게 하기 위해 먼저 문자화시켜줌
}

function deleteToDo(event){  //5.delete버튼에서 어떤 버튼을 삭제하는지 타겟팅해서 삭제할 수 있게
    const li = event.target.parentElement; //어떤 버튼이 선택되었는지 타겟팅할 수 있음.
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id)); //16. arrow func로 표현. li.id는 문자열이므로 parseInt해서 숫자로 바꿔줘야함.
    /*function toDoFilter(item){  //16. 각 todo에 id값을 부여했으니 이제 삭제버튼을 누르면 localStorage에서도 삭제하는 단계
        return item.id !== li.id
    }
    toDos = toDos.filter(toDoFilter); //16. Filter함수는 반드시 true를 리턴해야함. 새 배열에서 이 객체를(toDos) 포함하고 싶으면!!*/
    saveToDos(); //17. 필터를 통해 새로 toDos배열을 지정했으므로 saveToDos함수를 다시 불러줘야함!
}

function paintToDo(newToDo){  //3.li, span, button 만들어서 리스트만들기  //14. handleToDoSubmit에서 객체를 인자로 걸었기때문에 이제 이 함수의 인자인 newTodo는 객체가 됨
    const li = document.createElement('li');
    li.id = newToDo.id; //15. 이제 li에 id를 부여해서 newTodo 객체의 id를 li.id에 지정시켜줌. 각 li에 고유번호같은 것이 부여되게 됨.
    const span = document.createElement('span');
    span.innerText = newToDo.text; //14. newToDo가 객체이므로 그 안의 text를 받아 innerText로 지정
    const button = document.createElement('button');
    button.innerText = '✕';
    button.addEventListener('click', deleteToDo)  //4.delete 함수만들어서 함수걸어줌
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){  //1. 제일먼저 값을 입력하고 창을 비우는거 먼저 설정
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {  //14. 리스트를 삭제해도 삭제되지 않고 그대로 스토리지에 남아 새로고침하면 다시 나타나는 현상 수정. 객체를 설정해서 객체안에 text, id(무작위숫자) 지정.
        text : newToDo,
        id : Date.now(),
    };
    toDos.push(newTodoObj); //14. 객체를 push해줌
    paintToDo(newTodoObj); //3. 리스트만드는 함수걸어줌  //14.paintToDo에도 객체 인자로 넣음.
    saveToDos();   //8. 리스트배열 스토리지에 저장하는 함수걸어줌
}

toDoForm.addEventListener('submit',handleToDoSubmit);  //2.EventListner submit해주고

const savedToDos = localStorage.getItem(TODOS_KEY); //10. 스토리지에 저장된 toDos를 배열화하는 단계

/*function sayHello(item){ 
    console.log('This is the turn of', item)
}*/

if (savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos); //11.toDos를 배열화하는 것. JSON.parse 
		toDos = parsedToDos; 
		/*13. toDos배열이 언제나 비워진상태로 시작되게 설정되어있기때문에 기존에 localStorage에 저장되어있는 배열이 있다면 불러올 수 있게 지정. todolist를 이어서 작성할 수 있게 됨. 기존의 배열에 값 추가되는 형식.*/
		parsedToDos.forEach(paintToDo); //12. 배열에 있는 각각의 Item에 함수실행가능. toDos의 item들을 인자로 받아 함수실행
        /*parsedToDos.forEach((item) => console.log('THis is the turn of', item)); 
		12번처럼 함수지정해서 함수받아올 수 있고 이 코드처럼 한줄로 표현도 가능. 같은 뜻 (arrow function이라고 함)
		paintToDo를 forEach 하면 첫번째인자를 a 라고 치면 이걸받아서 paintToDo('a')하는 것. 
		setItem한 애들을 브라우저에 나타낼 수 있게 됨.*/
}