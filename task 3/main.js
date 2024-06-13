let personName = "Hiba";
console.log("uppercase:", personName.toLowerCase());
console.log("lowercase:", personName.toUpperCase());
console.log("titlecase:", personName.replace(/\bw/g, c => c.toUpperCase()));
export {};
