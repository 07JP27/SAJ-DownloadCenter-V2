<template>
  <div class="wrapper">
    <input type="checkbox" id="box">
    <label for="box" class="label">「<a href="hogeho">各種使用に関して</a>」に同意します。</label>
  </div>
</template>

<script>

export default {
  name: 'agreeCheckbox',
  props: ['link']
}
</script>

<style scoped>
.wrapper{
  padding: 1rem;
}
.label{
  font-size: 1.3rem;
}
input[type="checkbox"] { display: none; }

input[type="checkbox"] + label {
  display: block;
  position: relative;
  padding-left: 25px;
  margin-bottom: 20px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}

input[type="checkbox"] + label:last-child { margin-bottom: 0; }

input[type="checkbox"] + label:before {
  content: '';
  display: block;
  width: 20px;
  height: 20px;
  border: 2px solid grey;
  position: absolute;
  left: 0;
  top: 5px;
  opacity: .6;
  -webkit-transition: all .12s, border-color .08s;
  transition: all .12s, border-color .08s;
}

input[type="checkbox"]:checked + label:before {
  content: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuODrOOCpOODpOODvF8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiCgkgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDIwIDQyMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDIwIDQyMDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7c3Ryb2tlOiMyOGE3NDU7c3Ryb2tlLXdpZHRoOjIwO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojMjhhNzQ1O3N0cm9rZS13aWR0aDoyMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cgkuc3Qye2ZpbGw6bm9uZTtzdHJva2U6IzI4YTc0NTtzdHJva2Utd2lkdGg6MjA7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KCS5zdDN7ZmlsbDpub25lO3N0cm9rZTojMjhhNzQ1O3N0cm9rZS13aWR0aDoyNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQo8L3N0eWxlPgo8Zz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xMTQuNSwzNDguNDhMMTEyLDE3OS41YzAtMTEuNiwxMC40MS0yMSwyMy4yNS0yMWwwLDBjMTIuODQsMCwyMy4yNSw5LjQsMjMuMjUsMjEiLz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xNTguNSwxNzEuNWwxLTkxYzAsMCwyLTE4LjUsMTguNS0xOC41YzI3LjAyLDAsMjQuNSwyMS41LDI0LjUsMjEuNVYxODAiLz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yMDIsNzYuNXYtMjhjMCwwLDMuNS0xNiwyMi41LTE2czIxLjUsMTYsMjEuNSwxNlYxODEiLz4KCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0yNDYsNzBjMCwwLDQuNS0xNi41LDIyLjUtMTYuNWMyMiwwLDIzLjUsMTcsMjMuNSwxN1YyMjMiLz4KCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0yOTIsMjIyLjVjMCwwLDcuODgsNC4zOCwxNy41LDE0YzE4LDE4LDExLDQzLDExLDQzbC0yMCw3NWMwLDAtNSwxOS0xOCwyNnMtNDksOC00OSw4aC03OGMwLDAtNDEsMC00MS00MC4wMiIKCQkvPgoJPHBvbHlsaW5lIGNsYXNzPSJzdDMiIHBvaW50cz0iMTY5LjU4LDI4My4yOCAxOTkuMzUsMzEzLjA1IDI1OC45MSwyNTMuNDkgCSIvPgo8L2c+Cjwvc3ZnPgo=');
  width: 40px;
  top: -5px;
  left: -10px;
  border-radius: 0;
  opacity: 1;
  border-color: transparent;
}
</style>
