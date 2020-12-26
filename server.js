
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  const helloMesage = process.env.HELLO_MESSAGE;
  while(true) {
    console.log(helloMesage);
    await sleep(5000);
  }
}

main();
