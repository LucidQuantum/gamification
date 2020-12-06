const chooseColors = (color, classes) => {
   switch (color) {
      case 'red':
         return classes.red;
      case 'blue':
         return classes.blue;
      case 'purple':
         return classes.purple;
      case 'lightGrey':
         return classes.lightGrey;
      case 'grey':
         return classes.grey;
      case 'black':
         return classes.black;
      case 'white':
         return classes.white;
      default:
         return classes.default;
   }
};

export default chooseColors;
