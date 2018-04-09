<template>
    <div id="app-home">
        <h1>Welcome to this awesome VueJS App</h1>
        <b-link to="/missions">
        <b-button variant="success" size="lg" >
            Let's go !
        </b-button></b-link>

    </div>
</template>

<script>
export default {
  name: 'app-home'
}
</script>

<style>

    #app-home {
        text-align: center;
        margin-top: 60px;
    }
    h1 {
        margin-bottom: 60px;
    }

</style>
