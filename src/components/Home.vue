<template>
  <MainLayout>
    <template v-slot:main>
      <div class="icons" @click="openDialog">
        <span class="material-icons">control_point</span>
      </div>
      <div>
        <div v-if="todolist && todolist.length > 0" class="todo-wrapper">
          <ol class="flex flex-wrap ">
            <li  class="todolist flex flex-col bg-red-100   " v-for="(todo, index) in todolist" :key="index">
                <div class=" flex inner-wrapper ">
                    <input @click="change(index)" class="checkbox " type="checkbox"  />
                    <div  :class="todo.status=='completed'?'completed':''"  class="text-2xl text-red-600 ">
                  {{ todo.name }}
                </div>
                </div>
              <p class="text-xs text-red-400 ">{{ convertDate(todo.date) }}</p>
              <span @click="Delete(index)" class="material-icons delete">close</span>
            </li>
          </ol>
        </div>
      </div>
      <div v-if="isVisible">
        <div class="modal" >
          <ModelVue >
            <template v-slot:header>
              <h1>{{ title }}</h1>
              <span @click="minimize" class="material-icons close">close</span>
            </template>
            <template v-slot:content>
              <input
                type="text"
                v-model="todo"
                id="todolist"
                name="todolist"
                placeholder="Enter Task"
              />
            </template>
            <template v-slot:footer>
              <div class="flex relative">
                <MainButton primary  class=" text-lg w-20 h-10  absolute top-2 left-4"
                  label="Save"
                  @click="handleAdd" />
                  <MainButton secondary  class=" text-lg w-20 h-10  absolute top-2 left-28"
                  label="Clear"
                  @click="minimize" />
              </div>
            </template>
          </ModelVue>
        </div>
      </div>
    </template>
  </MainLayout>
</template>

<script>
/* eslint-disable */
import moment from "moment";
export default {
  name: "HomePage",
  data() {
    return {
      isVisible: false /*initially hides the dialog box*/,
      todo: "" /* stores the input from input tag */,
      todolist: [] /*Store the todo list */,
      title: "Add Items",
      toggle:false
    };
    
  },
  methods: {
    moment,
    change(index){
      this.todolist[index].status='completed'
      console.log(this.todolist[index])
      
    },
    computedClass(todo){
        
        return[
            {completed:this.completed}
        ]
    },
    convertDate(datestring) {
      return moment(datestring).format("dddd-MM-YYYY");
    },
    openDialog() {
      this.isVisible = true;
    },
    handleAdd() {
      if (this.todo == "") {
        return;
      } else {
        let todoitem = {
          name: this.todo,
          date: new Date().getTime(),
          status: "pending",
        };

        this.todolist.push(todoitem);
        this.todo = "";

        localStorage.setItem("todolist", JSON.stringify(this.todolist));
      }
    },
    Delete(index) {
      this.todolist.splice(index, 1);
    },
    minimize() {
      this.isVisible = false;
    },
  },

  mounted() {
    let initial = JSON.parse(localStorage.getItem("todolist"));

    this.todolist = initial == null ? [] : initial;
    console.dir(this.todolist);
    console.dir(JSON.parse(localStorage.getItem("todolist")));
  },
 
 
};
</script>

<style lang="scss" scoped>
.material-icons {
  font-size: 3rem;
  color: #3c2317;
}
.icons {
  position: absolute;
  bottom: 0;
  right: 0;
  user-select: none;
  cursor: pointer;
}

.todolist {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  width: 90%;
  height: fit-content;
  padding: 0.5rem;
  margin: 1rem;
  color: var(--dark);
  font-size: 1.5rem;
  font-weight: 500;
  transition: 0.2s ease-out;

  .checkbox{
    
    margin:4px;
    inline-size:14px;
    display: none;  
    cursor: pointer;
    transition: .2s ease-out;

    
   }
   &:hover{
      .delete{
        display: block;
      }
     }
 

  .delete {
    color: red;
    right: 30px;
    position: absolute;
    font-size: 32px;
    display: none;
    cursor: pointer;
    transition: .6s ease-out;
    
    &:hover{
    
    transform: rotate(-180deg);
  }
    
  }
  .inner-wrapper{
     &:hover{
      .checkbox{
        display: block;
      }
     }
  }
  
}

.todolist:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

input {
  display: block;
  padding: 10px;
  border: 1.8px solid grey;
  margin: 2rem auto;
  inline-size: 20rem;
  outline: none;
}
/* Modal*/
.modal {
  /* Close button in the header*/
  .close {
    user-select: none;
    color: #aaa;
    position: absolute;
    top: 0;
    right: 0;
    margin: 6px;
    font-size: 28px;
    font-weight: bold;
  }
  h1 {
    padding: 9px;
    font-family: "Fira Sans";
    text-transform: capitalize;
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--light);
  }
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
.minimize {
  position: absolute;
  right: 4px;
  top: 4px;
  color: var(--dark);
  font-size: 2rem;
  cursor: pointer;
}

//checkbox style

.todo-wrapper{
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

}


.completed{
        text-decoration: line-through;
    }

    
</style>
