<template>
    <b-navbar type="dark" variant="primary" toggleable>

        <b-navbar-toggle target="nav_dropdown_collapse"></b-navbar-toggle>

        <b-collapse is-nav id="nav_dropdown_collapse">

            <b-navbar-nav>
                <b-nav-item href="#/">Home</b-nav-item>
                <b-nav-item href="#/missions">Missions</b-nav-item>
            </b-navbar-nav>

        </b-collapse>

    </b-navbar>
</template>

<script>
export default {
  name: 'app-header'
}
</script>

<style>

</style>
