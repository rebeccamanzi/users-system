<template>
  <div id="app">

    <nav>
      <div class="nav-wrapper blue darken-1">
        <a href="#" class="brand-logo center">Users Service</a>
      </div>
    </nav>

    <div class="page-content">
           
      <form @submit.prevent="save">
          <label>First Name</label>
          <input type="text" placeholder="First Name" v-model="user.firstname">
          <label>Last Name</label>
          <input type="text" placeholder="Last Name" v-model="user.lastname">
          <label>Gender</label>
          <input type="text" placeholder="Gender" v-model="user.gender">
          <label>Email</label>
          <input type="text" placeholder="Email" v-model="user.email">
          <button class="waves-effect waves-light btn-small">Salvar<i class="material-icons left">save</i></button>
      </form>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="user of users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.first_name }}</td>
            <td>{{ user.last_name }}</td>
            <td>{{ user.gender }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.phone }}</td>
            <td>{{ user.status }}</td>       
            <td>
              <button class="waves-effect btn-small blue darken-1"><i class="small material-icons">create</i></button>
              <button class="waves-effect btn-small red darken-1"><i class="small material-icons">delete_sweep</i></button>
            </td>
          </tr>
        </tbody>  

      </table>
    </div>

  </div>
</template>

<script>

import Users from './services/users';

export default {

  data(){
    return {
      user: {
        firstname: '',
        lastname: '',
        gender: '',
        email: '',
      },

      users: []
    }
  },

  mounted(){
    this.list();
  },

  methods: {

    list(){
      Users.list().then(response => {
        this.users = response.data.result;
      })
    },

    save(){
      this.user = {}
      Users.save(this.user).then(alert('Saved Succesfully'));
      this.list();
    }
  }
}

</script>

<style>
  .page-content{
    padding: 2% 4%;
  }
  
  td {
    font-size: 0.9rem;
  }
</style>
