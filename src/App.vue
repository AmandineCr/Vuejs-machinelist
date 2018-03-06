<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <img id="popmachine" src="https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Fast-Food-PNG-Clipart/Popcorn_PNG_Clip_Art_Image.png?m=1507172108">
    <h2><strong>Select a Popcorn machine :</strong></h2>
    <h4>
        Hide "off" Popcorn Machines
        <toggle-button :value="seeMachines" @change="seeMachines = !seeMachines"/>
    </h4>
    <ul>
      <Machine v-for="machine in machines"
               :key="machine.id"
               v-bind:machine="machine"
               v-if="!seeMachines || machine.on">
      </Machine>
    </ul>

    <form @submit.prevent="addpopcornMachine" class="form">
      <img id="bucket" src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Popcorn_Time_logo.png">
      <input type="text" placeholder="New popcorn flavor" v-model="buffer.name">
      <select name="status" v-model="buffer.on">
        <option v-bind:value="true">ON</option>
        <option v-bind:value="false">OFF</option>
      </select>
      <input type="submit" value="Add">
      <img id="bucket" src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Popcorn_Time_logo.png">
    </form>
    <p>
      <a href="http://www.netflix.com"><img id="netflix" src="https://cdn.makeuseof.com/wp-content/uploads/2016/02/netflix-tools-670x335.jpg"/></a>
    </p>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
        seeMachines: false,
      msg: 'POPCORN MACHINE',
        buffer: {
            id: 3, name: 'New popcorn machine', on: true
        },
        machines: [
            { id: 1, name: 'Sweet popcorn machine ', on: true },
            { id: 2, name: 'Salty popcorn machine ', on: false },
            { id: 3, name: 'No flavor popcorn machine ', on: true }
        ]
    }
  },

    methods: {
        addpopcornMachine: function(e) {       // Pousse un nouvel objet dans la collection machines
            this.buffer.id += 1
            this.machines.push({ id: this.buffer.id,
                                name: this.buffer.name,
                                  on: this.buffer.on
            });
        }
    }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

img {
}

h1, h2 {
  font-weight: normal;
  margin-top: 30px;
}

h2 {
  color: red;
}
h4 {
  margin-top:30px;
  margin-bottom:40px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
#popmachine {
  width: 300px;
  height: 350px;
  margin-top: 30px;
}
  #bucket {
    width: 50px;
    height: 45px;
    margin-top: 50px;
  }
  #netflix {
    width: 1400px;
    height: 350px;
    margin-top: 150px;
  }
</style>
