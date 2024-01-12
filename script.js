const byteSize = (str) => {
  write your code here
	const blob = new Blob([str]);
  // Get the size property of the Blob to retrieve the byte size
  return blob.size;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
