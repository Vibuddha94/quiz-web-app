import { userName , setName } from "./program_data/programdata.js"

window.onload = setName(new URLSearchParams(window.location.search).get('name'));
document.getElementById('kari').innerText = userName