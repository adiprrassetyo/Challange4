/*
 * Contoh kode untuk membaca query parameter,
 * Siapa tau relevan! :)
 * */

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

// Coba olah data ini hehe :)
console.log("main example js! : params");
console.log(params);

/*
 * Contoh penggunaan DOM di dalam class
 * */
console.log("main example js! : app new App()");
const app = new App();

app.init().then(console.log("App initialized Successfully!"));
