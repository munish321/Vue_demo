<template>
    <div>
        <aside :class="computedClass">
          <div class="logo">
            <img src="../assets/logo1.png" alt="logo" />
          </div>
          <div class="menu-toggle-wrap">
            <button class="menu-toggle"  @click.prevent="toggleMenu">
            <span class="material-icons">keyboard_double_arrow_right</span>    
            </button>
          </div>

          <h3>Menu</h3>
          <div class="menu">
            <router-link class="button" to="/dashboard">
                <span class="material-icons">home</span>
                <span class="text">Home</span>
            </router-link>
            <router-link class="button" to="/contact">
                <span class="material-icons">contact_page</span>
                <span class="text">Contact</span>
            </router-link>
          </div>

          <div class="gap"></div>

          <div class="menu">
            <router-link class="button" to="/settings">
                <span class="material-icons">settings</span>
                <span class="text">Settings</span>
            </router-link>
          </div>


        </aside>
    </div>
</template>

<script>

    export default {
        name:'SideBar',
        data(){
            return{
                expand:false
            }
        },
        methods:{
            
            toggleMenu(){
            
                
                this.expand=!this.expand
               
            }
        }
    ,
    computed:{
        computedClass(){
            return [
                {expand:this.expand}
            ]
        }
    },
    mounted(){

    }

    }
</script>

<style lang="scss" scoped>

aside{
    display: flex;
    flex-direction: column;
    width: calc(2rem + 32px);
    overflow: hidden;
    min-height:100vh;
   

    background-color: var(--dark);
    color:var(--light);
    
    transition:0.3s ease-out;

    .gap{
        flex:1 1 0;
    }

    h3{
        color:--grey;
        font-size:.856rem;
        margin-bottom:0.5rem;
        text-transform: uppercase;
        padding:0.1rem 1rem;
    }

    .logo{
          margin:1rem;
          img{
            width:3rem;
          }
    }
          .menu-toggle-wrap{
            display: flex;
            position: relative;
            top:0;
            transition: .3s ease-out;
            padding-left:1rem;
            
             
            &:hover{
                .material-icons{
                    color: #5F9DF7;
                    transform:translateX(0.2rem);
                    transition: .3s ease-out;
                }
            }
          }
          h3, .button .text {
            opacity: 0;
            transition: .3s ease-out;
          }


          .menu{
            padding: 0 -1rem;
            transition:.3s ease-out;
            
            .button{
                display: flex;
                text-align: center;
                text-decoration: none;
                width:calc(2rem + 268px);
                
                padding: 0.5rem 0;
                .material-icons{
                    font-size: 2rem;
                    color: var(--light);
                    padding:.2rem 1rem ;
                    transition:.2s ease-out;
                }
                .text{
                    margin-top: 10px;
                    transition:.3s ease-out;
                }
               
                &:hover, &.router-link-exact-active {
                    background-color: var(--primary);
                }
                &.router-link-exact-active {
                    border-right:5px solid #E1CEB5;
                }
            }
          
          }
         
    &.expand{
        width: var(--sidebar-max-width);
        .menu-toggle-wrap{
            top:-4rem;
            justify-content:end;
        }
        .menu-toggle{
            transform: rotate(-180deg);
            transition: .8s ease-out;

            .material-icons{
                font-size:2rem;
                color: var(--light);
            }
            &:hover{
                .material-icons{
                    color: var(--primary);
                    transform:translateX(0.5rem);
                    transition: .3s ease-out;
                }
            }
        }
        h3, .button .text {
            opacity: 1;
            
          }
          .button{
            .material-icons{
                margin-right:7px;
            }
          }
    }
   
   

    @media (max-width:768px) {
        position: fixed;
        z-index:99;
        
    }

}
</style>