// Only change code below this line
function urlSlug(title) {
  const res = title.toLowerCase().trim().split(/\s+/).join("-");
  console.log(res);

  return res;
}
// Only change code above this line