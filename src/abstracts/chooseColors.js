const chooseColors = (color, classes) => {
   switch (color) {
      case 'red':
         return classes.red;
      case 'blue':
         return classes.blue;
      case 'purple':
         return classes.purple;
      default:
         return classes.lightGrey;
   }
};

export default chooseColors;
