{
    //

    type Circle = {
        shape: "circle";
        radius: number;
    };

    type Rectangle = {
        shape: "rectangle";
        width: number;
        height: number;
    };

    type Shape = Circle | Rectangle;

    function calculateShapeArea(shape: Shape): number {

        if (shape.shape === "circle") {
            return Math.PI * shape.radius*shape.radius;

        } else if (shape.shape === "rectangle") {
            return shape.width * shape.height;
        }
        return 0;
    }

    // Sample Input 1
    const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
    //sample output 1
    console.log(circleArea); 

    // Sample Input 2
    const rectangleArea = calculateShapeArea({ shape: "rectangle", width: 4, height: 6 });
    //sample output 2
    console.log(rectangleArea); 


    //
}