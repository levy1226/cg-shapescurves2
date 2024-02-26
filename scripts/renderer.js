class Renderer {
    // canvas:              object ({id: __, width: __, height: __})
    // num_curve_sections:  int
    constructor(canvas, num_curve_sections, show_points_flag) {
        this.canvas = document.getElementById(canvas.id);
        this.canvas.width = canvas.width;
        this.canvas.height = canvas.height;
        this.ctx = this.canvas.getContext('2d', {willReadFrequently: true});
        this.slide_idx = 0;
        this.num_curve_sections = num_curve_sections;
        this.show_points = show_points_flag;
    }

    // n:  int
    setNumCurveSections(n) {
        this.num_curve_sections = n;
        this.drawSlide(this.slide_idx);
    }

    // flag:  bool
    showPoints(flag) {
        this.show_points = flag;
        this.drawSlide(this.slide_idx);
    }
    
    // slide_idx:  int
    drawSlide(slide_idx) {
        this.slide_idx = slide_idx;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        let framebuffer = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);

        switch (this.slide_idx) {
            case 0:
                this.drawSlide0(framebuffer);
                break;
            case 1:
                this.drawSlide1(framebuffer);
                break;
            case 2:
                this.drawSlide2(framebuffer);
                break;
            case 3:
                this.drawSlide3(framebuffer);
                break;
        }

        this.ctx.putImageData(framebuffer, 0, 0);
    }

    // framebuffer:  canvas ctx image data
    drawSlide0(framebuffer) {
        // TODO: draw at least 2 Bezier curves
        //   - variable `this.num_curve_sections` should be used for `num_edges`
        //   - variable `this.show_points` should be used to determine whether or not to render vertices
        let p0 = {x: 100, y: 100};
        let p1 = {x: 100, y: 500};
        let p2 = {x: 500, y: 500};
        let p3 = {x: 500, y: 100};
        this.drawBezierCurve(p0, p1, p2, p3, this.num_curve_sections, [0, 128, 128, 255], framebuffer);
        
        let p4 = {x: 420, y: 500};
        let p5 = {x: 420, y: 100};
        let p6 = {x: 780, y: 100};
        let p7 = {x: 780, y: 500};
        this.drawBezierCurve(p4, p5, p6, p7, this.num_curve_sections, [0, 128, 128, 255], framebuffer);
    }

    // framebuffer:  canvas ctx image data
    drawSlide1(framebuffer) {
        // TODO: draw at least 2 circles
        //   - variable `this.num_curve_sections` should be used for `num_edges`
        //   - variable `this.show_points` should be used to determine whether or not to render vertices

        let center1 = {x: 100, y: 100};
        let center2 = {x: 500, y: 500};
        this.drawCircle(center1, 100, this.num_curve_sections, [0, 128, 128, 255], framebuffer);
        this.drawCircle(center2, 100, this.num_curve_sections, [0, 128, 128, 255], framebuffer);
        
    }

    // framebuffer:  canvas ctx image data
    drawSlide2(framebuffer) {
        // TODO: draw at least 2 convex polygons (each with a different number of vertices >= 5)
        //   - variable `this.show_points` should be used to determine whether or not to render vertices
        
        
        // Following lines are example of drawing a single triangle
        // (this should be removed after you implement the polygon)
        let point_a = {x:  20, y:  10};
        let point_b = {x: 80, y: 300};
        let point_c = {x: 200, y: 400};
        let point_d = {x: 320, y: 300};
        let point_e = {x: 500, y: 100};
        //let vertex_list = [point_a, point_b, point_c, point_d];
        let vertex_list1 = [point_a, point_b, point_c, point_d, point_e];
        this.drawConvexPolygon(vertex_list1, [0, 128, 128, 255], framebuffer);

        let point_a2 = {x:  600, y:  400};
        let point_b2 = {x: 650, y: 450};
        let point_c2 = {x: 600, y: 500};
        let point_d2 = {x: 625, y: 525};
        let point_e2 = {x: 450, y: 525};
        let point_f2 = {x: 625, y: 525};
        let point_g2 = {x: 550, y: 425};
        //let vertex_list = [point_a, point_b, point_c, point_d];
        let vertex_list2 = [point_a2, point_b2, point_c2, point_d2, point_e2, point_f2, point_g2];
        this.drawConvexPolygon(vertex_list2, [0, 128, 128, 255], framebuffer);
        //this.drawTriangle(point_a, point_c, point_b, [0, 128, 128, 255], framebuffer);

        if (this.show_points) {
            this.drawVertex(point_a, [0, 128, 128, 255], framebuffer);
            this.drawVertex(point_b, [0, 128, 128, 255], framebuffer);
            this.drawVertex(point_c, [0, 128, 128, 255], framebuffer);
            this.drawVertex(point_d, [0, 128, 128, 255], framebuffer);
            this.drawVertex(point_e, [0, 128, 128, 255], framebuffer);

            this.drawVertex(point_a2, [0, 128, 128, 255], framebuffer);
            this.drawVertex(point_b2, [0, 128, 128, 255], framebuffer);
            this.drawVertex(point_c2, [0, 128, 128, 255], framebuffer);
            this.drawVertex(point_d2, [0, 128, 128, 255], framebuffer);
            this.drawVertex(point_e2, [0, 128, 128, 255], framebuffer);
            this.drawVertex(point_f2, [0, 128, 128, 255], framebuffer);
            this.drawVertex(point_g2, [0, 128, 128, 255], framebuffer);
        }
    }

    // framebuffer:  canvas ctx image data
    drawSlide3(framebuffer) {
        // TODO: draw your name!
        //   - variable `this.num_curve_sections` should be used for `num_edges`
        //   - variable `this.show_points` should be used to determine whether or not to render vertices
        
        this.drawBezierCurve({x: 200, y: 500}, {x: 25, y: 500}, {x: 25, y: 250}, {x: 150, y: 250}, this.num_curve_sections, [0, 128, 128, 255], framebuffer, this.show_points); //S
        this.drawBezierCurve({x: 115, y: 255}, {x: 250,y: 250}, {x: 250,y: 100}, {x: 25, y: 100}, this.num_curve_sections, [0, 128, 128, 255], framebuffer, this.show_points); //S

        this.drawLine({x: 325, y: 100}, {x: 325, y: 255}, [0, 128, 128, 255], framebuffer); //lower i

        let pointIa = {x:  325, y:  300};
        let pointIb = {x: 275, y: 350};
        let pointIc = {x: 300, y: 400};
        let pointId = {x: 350, y: 400};
        let pointIe = {x: 380, y: 375};
        let pointIf = {x: 390, y: 350};
        let pointIg = {x: 375, y: 350};
        let dotIList = [pointIa, pointIb, pointIc, pointId, pointIe, pointIf, pointIg];
        this.drawConvexPolygon(dotIList, [0, 128, 128, 255], framebuffer); //dot i 

        this.drawBezierCurve({x: 350, y: 100}, {x: 350, y: 255}, {x: 400, y: 255}, {x: 400, y: 100}, this.num_curve_sections, [0, 128, 128, 255], framebuffer); //m
        this.drawBezierCurve({x: 400, y: 100}, {x: 400, y: 255}, {x: 450, y: 255}, {x: 450, y: 100}, this.num_curve_sections, [0, 128, 128, 255], framebuffer); //m

        this.drawCircle({x: 550, y: 150}, 50, this.num_curve_sections, [0, 128, 128, 255], framebuffer);

        this.drawBezierCurve({x: 650, y: 100}, {x: 650, y: 255}, {x: 700, y: 255}, {x: 700, y: 100}, this.num_curve_sections, [0, 128, 128, 255], framebuffer); //n
        this.drawLine({x: 650, y: 100}, {x: 650, y: 255}, [0, 128, 128, 255], framebuffer); //n 
    }

    // p0:           object {x: __, y: __}
    // p1:           object {x: __, y: __}
    // p2:           object {x: __, y: __}
    // p3:           object {x: __, y: __}
    // num_edges:    int
    // color:        array of int [R, G, B, A]
    // framebuffer:  canvas ctx image data
    drawBezierCurve(p0, p1, p2, p3, num_edges, color, framebuffer) {
        // TODO: draw a sequence of straight lines to approximate a Bezier curve
        let x1 = p3.x;
        let y1 = p3.y;
        let change = 1/num_edges;
        let t = 1 - change;

        while (t >= 0) {
            let x2 = Math.round((Math.pow((1-t), 3) * p0.x) + (3 * Math.pow((1-t), 2) * t * p1.x) + (3 * (1-t) * Math.pow(t, 2) * p2.x) + (Math.pow(t, 3) * p3.x));
            let y2 = Math.round(Math.pow((1-t), 3) * p0.y + 3 * Math.pow((1-t), 2) * t * p1.y + 3 * (1-t) * Math.pow(t, 2) * p2.y + Math.pow(t, 3) * p3.y);

            this.drawLine({x: x1,y:  y1}, {x: x2,y:  y2}, color, framebuffer);
            if (this.show_points) {
                this.drawVertex({x: x1, y: y1}, color, framebuffer);
                this.drawVertex({x: x2, y: y2}, color, framebuffer);
            }
            t -= change;
            x1 = x2;
            y1 = y2;
        }
    }

    // center:       object {x: __, y: __}
    // radius:       int
    // num_edges:    int
    // color:        array of int [R, G, B, A]
    // framebuffer:  canvas ctx image data
    drawCircle(center, radius, num_edges, color, framebuffer) {
        // TODO: draw a sequence of straight lines to approximate a circle
        let change = (2 * Math.PI) / num_edges;
        
        let x1 = Math.round(center.x + radius * Math.cos(0));
        let y1 = Math.round(center.y + radius * Math.sin(0));
        
        let t = change;

        let x2 = Math.round(center.x + radius * Math.cos(90));
        let y2 = Math.round(center.y + radius * Math.sin(90));

        for (let i = 0; i < num_edges; i ++) {
            let x2 = Math.round(center.x + (radius * Math.cos(t)));
            let y2 = Math.round(center.y + (radius * Math.sin(t)));

            this.drawLine({x: x1,y:  y1}, {x: x2,y: y2}, color, framebuffer);
            if (this.show_points) {
                this.drawVertex({x: x2, y: y2}, color, framebuffer);
            }
            t += change;
            x1 = x2;
            y1 = y2;
        }
    }
    
    // vertex_list:  array of object [{x: __, y: __}, {x: __, y: __}, ..., {x: __, y: __}]
    // color:        array of int [R, G, B, A]
    // framebuffer:  canvas ctx image data
    drawConvexPolygon(vertex_list, color, framebuffer) {
        let origin = vertex_list[0];
        // TODO: draw a sequence of triangles to form a convex polygon
        if (this.show_points)
            this.drawVertex(origin, color, framebuffer);

        for (let i = 1; i < vertex_list.length-1; i++) {
            this.drawTriangle(origin, vertex_list[i], vertex_list[i+1], color, framebuffer);
            if (this.show_points) {
                this.drawVertex(vertex_list[i], color, framebuffer);
                this.drawVertex(vertex_list[i+1], color, framebuffer);
            }
        }
    }
    
    // v:            object {x: __, y: __}
    // color:        array of int [R, G, B, A]
    // framebuffer:  canvas ctx image data
    drawVertex(v, color, framebuffer) {
        // TODO: draw some symbol (e.g. small rectangle, two lines forming an X, ...) centered at position `v`
        
        //draws an x centered at v
        //line 1:
        let p0 = {x: v.x-10, y: v.y + 10};
        let p1 = {x: v.x + 10, y: v.y - 10};

        //line 2:
        let p2 = {x: v.x+10, y: v.y + 10};
        let p3 = {x: v.x - 10, y: v.y - 10};
        
        this.drawLine(p0, p1, color, framebuffer);
        this.drawLine(p2, p3, color, framebuffer);
    }
    
    /***************************************************************
     ***       Basic Line and Triangle Drawing Routines          ***
     ***       (code provided from in-class activities)          ***
     ***************************************************************/
    pixelIndex(x, y, framebuffer) {
	    return 4 * y * framebuffer.width + 4 * x;
    }
    
    setFramebufferColor(color, x, y, framebuffer) {
	    let p_idx = this.pixelIndex(x, y, framebuffer);
        for (let i = 0; i < 4; i++) {
            framebuffer.data[p_idx + i] = color[i];
        }
    }
    
    swapPoints(a, b) {
        let tmp = {x: a.x, y: a.y};
        a.x = b.x;
        a.y = b.y;
        b.x = tmp.x;
        b.y = tmp.y;
    }

    drawLine(p0, p1, color, framebuffer) {
        if (Math.abs(p1.y - p0.y) <= Math.abs(p1.x - p0.x)) { // |m| <= 1
            if (p0.x < p1.x) {
                this.drawLineLow(p0.x, p0.y, p1.x, p1.y, color, framebuffer);
            }
            else {
                this.drawLineLow(p1.x, p1.y, p0.x, p0.y, color, framebuffer);
            }
        }
        else {                                                // |m| > 1
            if (p0.y < p1.y) {
                this.drawLineHigh(p0.x, p0.y, p1.x, p1.y, color, framebuffer);
            }
            else {
                this.drawLineHigh(p1.x, p1.y, p0.x, p0.y, color, framebuffer);
            }
        }
    }
    
    drawLineLow(x0, y0, x1, y1, color, framebuffer) {
        let A = y1 - y0;
        let B = x0 - x1;
        let iy = 1; // y increment (+1 for positive slope, -1 for negative slop)
        if (A < 0) {
            iy = -1;
            A *= -1;
        }
        let D = 2 * A + B;
        let D0 = 2 * A;
        let D1 = 2 * A + 2 * B;
    
        let y = y0;
        for (let x = x0; x <= x1; x++) {
            this.setFramebufferColor(color, x, y, framebuffer);
            if (D <= 0) {
                D += D0;
            }
            else {
                D += D1;
                y += iy;
            }
        }
    }
    
    drawLineHigh(x0, y0, x1, y1, color, framebuffer) {
        let A = x1 - x0;
        let B = y0 - y1;
        let ix = 1; // x increment (+1 for positive slope, -1 for negative slop)
        if (A < 0) {
            ix = -1;
            A *= -1;
        }
        let D = 2 * A + B;
        let D0 = 2 * A;
        let D1 = 2 * A + 2 * B;
    
        let x = x0;
        for (let y = y0; y <= y1; y++) {
            this.setFramebufferColor(color, x, y, framebuffer);
            if (D <= 0) {
                D += D0;
            }
            else {
                D += D1;
                x += ix;
            }
        }
    }
    
    drawTriangle(p0, p1, p2, color, framebuffer) {
        // Deep copy, then sort points in ascending y order
        p0 = {x: p0.x, y: p0.y};
        p1 = {x: p1.x, y: p1.y};
        p2 = {x: p2.x, y: p2.y};
        if (p1.y < p0.y) this.swapPoints(p0, p1);
        if (p2.y < p0.y) this.swapPoints(p0, p2);
        if (p2.y < p1.y) this.swapPoints(p1, p2);
        
        // Edge coherence triangle algorithm
        // Create initial edge table
        let edge_table = [
            {x: p0.x, inv_slope: (p1.x - p0.x) / (p1.y - p0.y)}, // edge01
            {x: p0.x, inv_slope: (p2.x - p0.x) / (p2.y - p0.y)}, // edge02
            {x: p1.x, inv_slope: (p2.x - p1.x) / (p2.y - p1.y)}  // edge12
        ];
        
        // Do cross product to determine if pt1 is to the right/left of edge02
        let v01 = {x: p1.x - p0.x, y: p1.y - p0.y};
        let v02 = {x: p2.x - p0.x, y: p2.y - p0.y};
        let p1_right = ((v01.x * v02.y) - (v01.y * v02.x)) >= 0;
        
        // Get the left and right edges from the edge table (lower half of triangle)
        let left_edge, right_edge;
        if (p1_right) {
            left_edge = edge_table[1];
            right_edge = edge_table[0];
        }
        else {
            left_edge = edge_table[0];
            right_edge = edge_table[1];
        }
        // Draw horizontal lines (lower half of triangle)
        for (let y = p0.y; y < p1.y; y++) {
            let left_x = parseInt(left_edge.x) + 1;
            let right_x = parseInt(right_edge.x);
            if (left_x <= right_x) { 
                this.drawLine({x: left_x, y: y}, {x: right_x, y: y}, color, framebuffer);
            }
            left_edge.x += left_edge.inv_slope;
            right_edge.x += right_edge.inv_slope;
        }
        
        // Get the left and right edges from the edge table (upper half of triangle) - note only one edge changes
        if (p1_right) {
            right_edge = edge_table[2];
        }
        else {
            left_edge = edge_table[2];
        }
        // Draw horizontal lines (upper half of triangle)
        for (let y = p1.y; y < p2.y; y++) {
            let left_x = parseInt(left_edge.x) + 1;
            let right_x = parseInt(right_edge.x);
            if (left_x <= right_x) {
                this.drawLine({x: left_x, y: y}, {x: right_x, y: y}, color, framebuffer);
            }
            left_edge.x += left_edge.inv_slope;
            right_edge.x += right_edge.inv_slope;
        }
    }
};

export { Renderer };
