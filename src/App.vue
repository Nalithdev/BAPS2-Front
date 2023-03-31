<template>
  <router-view/>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Euclid Circular', Verdana, Geneva, Tahoma, sans-serif;
}

html, body, #app {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

@font-face {
  font-family: "Euclid Circular";
  src: local("Euclid Circular A"),
    url(./fonts/EuclidCircular/EuclidCircularRegular.ttf) format("truetype");
}

@font-face {
  font-family: "Euclid Circular";
  src: local("Euclid Circular A Bold"),
    url(./fonts/EuclidCircular/EuclidCircularBold.ttf) format("truetype");
  font-weight: 700;
}
</style>
