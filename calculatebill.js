{
    const w = document.getElementById("water");
    w.addEventListener("click", funcw);
    
    function funcw() {
        const h = `<div style="display:grid;grid-template-columns:33% 33% 33%;">
           <div>
                <img src="https://5.imimg.com/data5/RQ/OP/AC/SELLER-2607015/qua-natural-mineral-water.jpeg">
                <p>QUA</p>
                <p>Rs 60 , 1000 ml</p>
                <button onclick="additem('QUA',60)">ADD TO CART</button>
                <button onclick="delitem('QUA',60)">DELETE</button>
            </div>
    
            <div>
            <img src="https://5.imimg.com/data5/SELLER/Default/2023/6/314605875/HA/PI/UA/22243912/750ml-kinley-packaged-mineral-water-500x500.jpg">
            <p id="itemname">KINLEY</p>
            <p>Rs 20 , 500 ml</p>
            <button onclick="additem('KINLEY',20)">ADD TO CART</button>
            <button onclick="delitem('KINLEY',20)">DELETE</button>
            </div>
    
            <div>
                <img src="https://www.bigbasket.com/media/uploads/p/l/242060_5-aquafina-packaged-drinking-water.jpg">
                <p>AQUAFINA</p>
                <p>Rs 15 , 450 ml</p>
                <button onclick="additem('AQUAFINA',15)">ADD TO CART</button>
            <button onclick="delitem('AQUAFINA',15)">DELETE</button>
            </div>
    
            <div>
                <img src="https://5.imimg.com/data5/SELLER/Default/2021/2/QK/JY/KU/2786423/communication-skills-training.jpg">
                <p>BAILLEY</p>
                <p>Rs 25 , 600 ml</p>
                <button onclick="additem('BAILLEY',25)">ADD TO CART</button>
                <button onclick="delitem('BAILLEY',25)">DELETE</button>
            </div>
    
            <div>
                <img src="https://m.media-amazon.com/images/I/61KAmwTOrtL.jpg">
                <p>HIMALAYAN</p>
                <p>Rs 35 , 750 ml</p>
                <button onclick="additem('HIMALAYAN',35)">ADD TO CART</button>
                <button onclick="delitem('HIMALAYAN',35)">DELETE</button>
            </div>
            
            <div>
                <img src="https://5.imimg.com/data5/KY/QU/ZV/SELLER-6060390/1-liter-bisleri-packaged-drinking-water.jpg">
                <p>BISLERI</p>
                <p>Rs 6 , 250 ml</p>
                <button onclick="additem('BISLERI',6)">ADD TO CART</button>
                <button onclick="delitem('BISLERI',6)">DELETE</button>
            </div>
    
        </div>`;
        document.getElementById("mid").innerHTML = h;
    }
    
    
    
    
    
    
    
    
    const c = document.getElementById("coffee");
    c.addEventListener("click", funcc);
    
    function funcc() {
        const hc = `<div style="display:grid;grid-template-columns:33% 33% 33%;">
        <div>
            <img src="https://m.media-amazon.com/images/I/71O4reZ6UBL.jpg">
            <p>NESCAFE ICED LATTE</p>
            <p>Rs 35 , 250 ml</p>
            <button onclick="additem('NESCAFE ICED LATTE',35)">ADD TO CART</button>
            <button onclick="delitem('NESCAFE ICED LATTE',35)">DELETE</button>
        </div>
        <div>
            <img src="https://m.media-amazon.com/images/I/51qlCdu5xFS.AC_SS300.jpg">
            <p>STARBUCKS FRAPPUCCINO</p>
            <p>Rs 320 , 280 ml</p>
            <button onclick="additem('STARBUCKS FRAPPUCCINO',320)">ADD TO CART</button>
            <button onclick="delitem('STARBUCKS FRAPPUCCINO',320)">DELETE</button>
        </div>
        <div>
            <img src="https://m.media-amazon.com/images/I/5187kFE1PiL.jpg">
            <p>MOTHER DAIRY COLD COFFEE</p>
            <p>Rs 25 , 180 ml</p>
            <button onclick="additem('MOTHER DAIRY COLD COFFEE',25)">ADD TO CART</button>
            <button onclick="delitem('MOTHER DAIRY COLD COFFEE',25)">DELETE</button>
        </div>
        <div>
            <img src="https://m.media-amazon.com/images/I/51kEiVJsmpL.jpg">
            <p>SLEEPY OWL SALTED CARAMEL</p>
            <p>Rs 25 , 600 ml</p>
            <button onclick="additem('SLEEPY OWL SALTED CARAMEL',25)">ADD TO CART</button>
                <button onclick="delitem('SLEEPY OWL SALTED CARAMEL',25)">DELETE</button>
        </div>
        <div>
            <img src="https://www.jiomart.com/images/product/original/rvcpj2fhxg/pokka-ready-to-drink-cappuccino-coffee-240-ml-product-images-orvcpj2fhxg-p602099757-0-202306031153.jpg?im=Resize=(1000,1000)">
            <p>POKKA CAPPUCCINO</p>
            <p>Rs 42 , 350 ml</p>
            <button onclick="additem('POKKA CAPPUCCINO', 42 )">ADD TO CART</button>
                <button onclick="delitem('POKKA CAPPUCCINO', 42 )">DELETE</button>
        </div>
        <div>
            <img src="https://www.jiomart.com/images/product/original/rvdfebhbq7/rage-coffee-flavoured-ready-to-drink-cold-coffee-mocha-frappe-240-ml-bold-smooth-rich-coffee-pack-of-25-product-images-orvdfebhbq7-p601238765-1-202305070321.jpg?im=Resize=(420,420)">
            <p>RAGE MOCHA FRAPPE</p>
            <p>Rs 60 , 190 ml</p>
            <button onclick="additem('RAGE MOCHA FRAPPE',60)">ADD TO CART</button>
                <button onclick="delitem('RAGE MOCHA FRAPPE',60)">DELETE</button>
        </div>
    
    </div>`;
    document.getElementById("mid").innerHTML = hc;
    }
    
    
    
    
    
    
    
    const j = document.getElementById("juices");
    j.addEventListener("click", funcj);
    
    function funcj() {
        const hj =`<div style="display:grid;grid-template-columns:33% 33% 33%;">
        <div>
            <img src="https://www.bigbasket.com/media/uploads/p/xxl/40134883_4-alo-frut-mixed-fruit-juice-with-aloe-vera.jpg">
            <p>ALO FRUT MIXED FRUIT</p>
            <p>Rs 39 , 300 ml</p>
            <button onclick="additem('ALO FRUT MIXED FRUIT',39)">ADD TO CART</button>
                <button onclick="delitem('ALO FRUT MIXED FRUIT',39)">DELETE</button>
        </div>
        <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-9QSND3CSU7acZ2f0QCSnFIhQesl42FEpuw&usqp=CAU">
            <p>REAL POMEGRANATE</p>
            <p>Rs 320 , 1000ml</p>
            <button onclick="additem('REAL POMEGRANATE',320 )">ADD TO CART</button>
                <button onclick="delitem('REAL POMEGRANATE',320 )">DELETE</button>
        </div>
        <div>
            <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYSFRYWEhYYGBgaGBkRGBUSFRUaFRkcGBUZGhgZGRwcIy4mHB4rIRoaJjgmLC8xNTU1GiQ7QDszPy40NTEBDAwMEA8QHxISHzUnJCw0NjQ0NDQ2NDQ0NDQxNDQ0NjQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYBAwQCBwj/xAA7EAACAQIDBAgDBQcFAAAAAAAAAQIDEQQSIQUxQWEGIlFxgZGhsRMywVJictHwIzNCQ4KS4RQVssLS/8QAGgEBAAIDAQAAAAAAAAAAAAAAAAQFAQIGA//EAC8RAAIBAwIDBgYCAwAAAAAAAAABAgMEERIhMUFhBRNRcYGRIqGx0eHwMsEUI2L/2gAMAwEAAhEDEQA/APswAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANc52Cma6z18DMUzBlHtzPSd0aJ3Rup7kZDR7AAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA11KiirsxKSisvgDk2ndQupOL3aWIa85XfxHp69x1bRxuZZfYi2ubOP7SvO8r5pSeMY4tb+5ZW9JqG/0O2lmUknUk1p+tSxQjZWKlTVncncJj72UuOif0ZJ7HvIwlKNWXHGM8jzuaT2aJMGEZOoIIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAITaOLu3Z6R0XNnftCv8ODfF6IrOIqbkUHbN244ox83/AEv79iZa0dT1My5XuzCPEnou82Xsjm1EsOBhGynUtoaXLsMNmOBnTksmzMXnWV716kiVPC18koyRaYSuk1x1Ou7Ju3WpaJcY/TkVVzS0SyuDPYALYjgAAAAAAAAAAAAAAAAAAAAAAAAAAAAwwCA23XvOMezf7kLKV2dO0Kl6snzf1I7OcNdVHVrTl1fy2L63p6YJdDsq6KD7b+ljbVhaN+Dtrz13EfWruTV+CsdE8SnBR7NUlfTtu78zMFD4vLbzMShJKPmepR0XO5mW456mJvblyCq9VLs3Hg4o30S2yboS07nctOyK2eC5aFRpy39xYOjlS6kvEsOyKjhdJeKaI17DNPPgToAOvKgAAAAAAAAAAAAAAAAAAAAAAAAAAAGDJhgFLxrtWn/V9SLciW21Tca0u/31IaS1Zw1WGmpKL5N/U6W3w4J9EHIKZ4d7nlsxgkaTdmPUJGmJ7gYaMNI6act/cWHozvn3fUrlLiWbozB2nLmkiV2bHN3D1+hAvtqUifAB2JRAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwwCJ23ShKN5WUluet+S0KViG032eP1RYdvUJ5nkd73lZSV1u4byvVY1eKl43/I5ntBaqzbhjrjj6l92fFKG0k+ngaMzfPxPTclxX98TF5J6x87o9yq/c8f8AFiAlHmWLT5L6fc8Rvy8ZI9RlzXr+QU39hep6tJ7oW7otmuEGv3Y6cKm2k93cy87PcciUNEuHHvKJSo1OEZ+T+iLbsHDSgm59m69349ha9lao1HiPHiyo7RScc59CaAB0RTgAAAAAAAAAAAAAAAAAAAAAAAAAAAwZAB856dYCpOtF01fNeK6yWqjd6vdpfyKzsmGIqVVShOUJu6605xjHKm5ZuyyT4F/6VrI1Nb4zjLvtbT6FOr1VUrVJwvDPTxCi9VJOWGqLetzzalrb159y1hPEXjK5r8EOpTjr48/kTMdk42G/E0mudep9UjfOjin/AB0VzhiJP/kz5jsfZWJxEcLOGKquNepOlLNUq2pOGZty6/WTjGcuHy2N1bZuNUstOVaortXi6i/mTpq6b3t03ubWqV76FS7u6f8AKMPZk1W1Nc37n0WOExcbXUmnulB5l5xZI08HXXzzUG+Ep2fkrnzLY89pKUY0viRz9VSqdWOtN1NXvfUTlxuRdfFYzPQlWnWhGdSGW7cIyvKDatGy3Si7PhJPiazuq8tlGK6/jH2No0Yp7tn1yeHnJ5W22nl3t8Sx7Jwzpp342NeGpXnN/fkvU76W/wAH9D1c29jDS5G8AGpqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVbpYrwn4e6Klg8LecV2+zTT9y5dJ43jJd30ILZVH9pT/HH1dmTbWf+mS8zwqx+Neh8z6G7VqOeHwqnCnTnKznkcpJuSqXd5JWvHK7W6s5riS+LWJpUozy0vjSxU4RhlcYpUq8sSqjlOdrOpGbS7HxukQOD2LiqM6c6ahng1l69KXWtb5W3m39hJRqbTVknB2tbNChNq0HRSu4t7k483e+t2VinF8GWUqNRPeLXozq2d/q5VMPGrTpwi5TjOWX924OeEyu9W0m1LKorVrVXacir1Ns1q9XDxrNfs6kNVmWZpwhmcXJxTtBfKlvb4k46u1NJ5oWbdRSdKg4t/EhJzXUs7Tyu63Sk/tO8XT2JiJ1ozqOGbPFyvO1rSWiilpbdZLQd5DxRmNvVfCL9j9IUqeVy5ycvNnmlLrpfdk/WP5m1tGqEeunwUZLzcfyMRnmZG5HUAD3NAAAAAAAAAAAAAAAAAAAAAAAAAAAAYZkwAQO3VmUl2WXsRuz6VqkPxR9yU2o9ZLtt9DlpwytNcLM2tp/BJdWKkd15FJweElm+InG6k7Kak4ylCEqjUrfLHLF681ztI/CxCayqFSUIfGlJxqXko1Zy+Fppmc87VuCS0LdS2bQmnahTtLSSS0a7GuKNVbB4SE4QnRpqUk6kc0I2bi0r67pdbTvZXxp9xDDePX8FnXvO+qa2s8t0uHmn18SnYfD4iPwlTqQiownkjSzTdnBfNFPNKovjwik7WyqW67ISpgnS+Fe/WhCrqkksz1je7ba4tpH02vgcNCzjh6F+D+FDTlu0OehRo3SWFw6torUYLy0IN1d26+CTefJv94Ei0u6lGWpLbmtk3x5783n0Jx1FfXtPdFpyTWuklfxjyOSFK8ZSe+Tu9XbRW0XA24F9b+7/AKnraVZOth8Hv1KuUfhJEAFueAAAAAAAAAAAAAAAAAAAAAAAAAAAAMMyYAILaTvOa5J+iPEIaXe5LU8bZn+0kuUfZHPTxXVdt618k5X80QIXXdyqRfVomSoOUYyXQk6OOhG63W4cfG1yu9KNm1MVJVMPKMnCGT4b0lvbbV9He67Nxvw6u/1uO5pJLNrrfno+HqVrvpz/AJYPSpbQW25F4KMlGMKspScVllmevd28tdTsxEYQjaGlhjbVIuS/eQV5W4xXHvREyxqatcrKsXvjfO+SbTpOeGuXIsuzMVeEoyfyvS/Y/wBep17Od3da7152K3gq97pcU/eJYNivgWdjOTqQz4YIdzS0KTJgAHQlcAAAAAAAAAAAAAAAAAAAAAAAAAAADDMmGAVbbsrVnfsj7EZCSzWvvTS/qTSJHpLpVv8AdRRNr4x08RCavay39ji1dHPVVquJR6tl1TemjHweF5Z2LNha19fW1uHI78Ti4yULaSfVa+pC0sWq6c6Wr/jgtWnxaX2TTWnJtePHRWRAfwtxe+SW6OqWXs0T9OUE9G3o46tap6O/Iq+O2TiFJqg4SXBuUVJa9ktPU7a1Zx6yd+X0MQxrtzsvo9PbzNaU503nCfRmsreTg1GTWfDidmw8FOlB/EavpGylm043feWvY8v14FQwuPc2o33vt7EWnYUrtrlfx3exPs5Pv46uLIl7CSg9X7jYngAdGU4AAAAAAAAAAAAAAAAAAAAAAAAAAAAABXukWEzNSTSdrdbc2t3cUnbGx5VI2lGSa3SteL7mtC89IZO1ovW17PcU+WLqQejlDnBuz8Cju4RVbUsp+KLqzTlR0vDXgypUMHWotuEmmtYtO3Fb+Vr+hO7O29Ju2IoRaVm5RzKUu3SOjdu0kf8AeKn8UoSX36VNvxdj1HaUuFOl3qhD/wAnlJKf8sZ8vyTWpYSa4f8AX9tZOTbO1IuWTD004pXvFPe9X1mr6K3mcVKlOemSXgmree8nKO0Jv5acP6aML+kTdLaNdaZ3Hkkoe1jR014/L8pGYSlBaYpe+/nwNWA2TOOqi1uWapaKXc3wLZsTDqN3e7tbTcuS7SqU68pNN5pPtk/zLVsWo9E3v4Ldoe9nCmqqlu31/fuQL7Xo3f7++RNgAvSmAAAAAAAAAAAAAAAAAAAAAAAAAAABhmQAV7pLgpzSnSWZxTVk7Mo2IxkoO1SLi72tOLi/8n1mxyYnZ9Op+8hGX4kiBXs+8lqi8E+2vu6WmUcr5ny9YqMt9vFXCrQ7F5IvVfodhZfy8v4JNfU5X0Fw32qq7p/4Ijsay8CfHtG3fHUipRrQXBeh6eNit0V5pFsh0Gwyd71H3z/I7sN0WwsLP4ak+2bcvcx/gVn4IPtG3XDLKTh8VOo7U4uT3dSLlbve5F26PbPnTWar8zVrXu0uZK0MNCGkIxivupL2OgmW9iqctUnlkC5vnVjpjHC92AATyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/2Q==">
            <p>MINUTE MAID ORANGE</p>
            <p>Rs 30 , 250 ml</p>
            <button onclick="additem('MINUTE MAID ORANGE',30)">ADD TO CART</button>
                <button onclick="delitem('MINUTE MAID ORANGE',30)">DELETE</button>
        </div>
        <div>
            <img src="https://ik.imagekit.io/dunzo/tr:w-$w$,h-$h$,cm-pad_resize/1653554533983_product_5d3196c69e1975027fa2df2a_1.jpg">
            <p>BE NATURAL MANGO</p>
            <p>Rs 45 , 400 ml</p>
            <button onclick="additem('BE NATURAL MANGO',45)">ADD TO CART</button>
                <button onclick="delitem('BE NATURAL MANGO',45)">DELETE</button>
        </div>
        <div>
            <img src="https://5.imimg.com/data5/SELLER/Default/2023/9/347527665/AP/FK/OE/106286638/200ml-tropicano-guava-delight.jpg">
            <p>TROPICANA GUAVA</p>
            <p>Rs 50 , 350 ml</p>
            <button onclick="additem('TROPICANA GUAVA',50)">ADD TO CART</button>
                <button onclick="delitem('TROPICANA GUAVA',50)">DELETE</button>
        </div>
        <div>
            <img src="https://www.bigbasket.com/media/uploads/p/l/40105620_10-paper-boat-apple-juice.jpg">
            <p>PAPER BOAT APPLE</p>
            <p>Rs 60 , 190 ml</p>
            <button onclick="additem('PAPER BOAT APPLE',60)">ADD TO CART</button>
            <button onclick="delitem('PAPER BOAT APPLE',60)">DELETE</button>
        </div>
    
    </div>`;
        document.getElementById("mid").innerHTML = hj;
        }
    
    
    
        
    const s = document.getElementById("shakes");
    s.addEventListener("click", funcs);
    function funcs() {
        const hs = `
        <div style="display:grid;grid-template-columns:33% 33% 33%;">
            <div>
                <img src="https://www.bigbasket.com/media/uploads/p/l/1207071-2_2-mother-dairy-milk-shake-mango.jpg">
                <p>MOTHER DAIRY CHOCOLATE MILKSHAKE</p>
                <p>Rs 35 , 270 ml</p>
                <button onclick="additem('MOTHER DAIRY CHOCOLATE MILKSHAKE',35)">ADD TO CART</button>
                <button onclick="delitem('MOTHER DAIRY CHOCOLATE MILKSHAKE',35)">DELETE</button>
            </div>
            <div>
                <img src="https://m.media-amazon.com/images/I/51VdOcxBGzL.jpg">
                <p>HERSHEY'S STRAWBERRY SHAKE</p>
                <p>Rs 20 , 180ml</p>
                <button onclick="additem('HERSHEYS STRAWBERRY SHAKE',20)">ADD TO CART</button>
                <button onclick="delitem('HERSHEYS STRAWBERRY SHAKE',20)">DELETE</button>
            </div>
            
            <div>
                <img src="https://m.media-amazon.com/images/I/51GQb3AfkyL.jpg">
                <p>CAVIN'S VANILLA MILKSHAKE</p>
                <p>Rs 34 , 160 ml</p>
                <button onclick="additem('CAVINS VANILLA MILKSHAKE',34)">ADD TO CART</button>
                <button onclick="delitem('CAVINS VANILLA MILKSHAKE',34)">DELETE</button>
            </div>
            <div>
                <img src="https://m.media-amazon.com/images/I/71R9So+SkCL.jpg">
                <p>AMUL BADAM SHAKE</p>
                <p>Rs 40 , 200 ml</p>
                <button onclick="additem('AMUL BADAM SHAKE',40)">ADD TO CART</button>
                <button onclick="delitem('AMUL BADAM SHAKE',40)">DELETE</button>
            </div>
            <div>
                <img src="https://images-eu.ssl-images-amazon.com/images/I/51Konk+76KS.AC_UL600_SR600,600.jpg">
                <p>STORIA BANANA SHAKE</p>
                <p>Rs 50 , 350 ml</p>
                <button onclick="additem('STORIA BANANA SHAKE',50)">ADD TO CART</button>
                <button onclick="delitem('STORIA BANANA SHAKE',50)">DELETE</button>
            </div>
            <div>
                <img src="https://img1.hkrtcdn.com/18193/prd_1819270-MuscleBlaze-18g-Protein-Shake-No-Added-Sugar-6-PiecesPack-Chocolate_o.jpg">
                <p>MUSCLEBLAZE PROTEIN SHAKE</p>
                <p>Rs 75 , 200 ml</p>
                <button onclick="additem('MUSCLEBLAZE PROTEIN SHAKE',75)">ADD TO CART</button>
                <button onclick="delitem('MUSCLEBLAZE PROTEIN SHAKE',75)">DELETE</button>
            </div>
        
        </div>`;
        document.getElementById("mid").innerHTML = hs;
        }
    
    
    
    
    
    
    
    
    
    const cd = document.getElementById("colddrinks");
    cd.addEventListener("click", funccd);
    function funccd() {
        const hcd =`
        <div style="display:grid;grid-template-columns:33% 33% 33%;">
            <div>
                <img src="https://m.media-amazon.com/images/I/51y5jzm5JHL.AC_UF1000,1000_QL80.jpg">
                <p>THUMS UP</p>
                <p>Rs 45 , 750 ml</p>
                <button onclick="additem('THUMS UP',45)">ADD TO CART</button>
                <button onclick="delitem('THUMS UP',45)">DELETE</button>
            </div>
            <div>
                <img src="data:image/jpeg;base64,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">
                <p>LIMCA</p>
                <p>Rs 75 , 1000ml</p>
                <button onclick="additem('LIMCA',75)">ADD TO CART</button>
                <button onclick="delitem('LIMCA',75)">DELETE</button>
            </div>
            
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1QzIXMehUXmIvTiw-UGuv7VJPLHfF7JA3fxPc5pE5p7XH2xO0RwGTebppcNxcPS2mcBE&usqp=CAU">
                <p>FANTA</p>
                <p>Rs 55 , 500 ml</p>
                <button onclick="additem('FANTA',55)">ADD TO CART</button>
                <button onclick="delitem('FANTA',55)">DELETE</button>
            </div>
            <div>
                <img src="data:image/jpeg;base64,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">
                <p>DIET COKE</p>
                <p>Rs 40 , 200 ml</p>
                <button onclick="additem('DIET COKE',40)">ADD TO CART</button>
                <button onclick="delitem('DIET COKE',40)">DELETE</button>
            </div>
            <div>
                <img src="https://5.imimg.com/data5/UE/NE/WQ/SELLER-82456434/sprinte-cold-derink-500x500.jpg">
                <p>SPRITE</p>
                <p>Rs 50 , 250 ml</p>
                <button onclick="additem('SPRITE',50)">ADD TO CART</button>
                <button onclick="delitem('SPRITE',50)">DELETE</button>
            </div>
            <div>
                <img src="https://www.jiomart.com/images/product/original/491335219/pepsi-black-250-ml-can-product-images-o491335219-p491335219-0-202203170316.jpg?im=Resize=(1000,1000)">
                <p>PEPSI BLACK</p>
                <p>Rs 75 , 200 ml</p>
                <button onclick="additem('PEPSI BLACK',75)">ADD TO CART</button>
                <button onclick="delitem('PEPSI BLACK',75)">DELETE</button>
            </div>
        
        </div>`;
        document.getElementById("mid").innerHTML = hcd;
        }
        


        function additem(name, price) {
            const selectedItemsList = document.getElementById('sil');
            const selectedPricesList = document.getElementById('spl');
            const itemName = document.createElement('li');
            itemName.textContent = name;
            const itemPrice = document.createElement('li');
            itemPrice.textContent = price;
            selectedItemsList.appendChild(itemName);
            selectedPricesList.appendChild(itemPrice);
        }
        function delitem(name, price) {
            const selectedItemsList = document.getElementById('sil');
            const selectedPricesList = document.getElementById('spl');
            const items = selectedItemsList.getElementsByTagName("li");
            const prices = selectedPricesList.getElementsByTagName("li");
            for (let i = 0; i < items.length; i++) {
                 if (items[i].textContent.includes(name) && prices[i].textContent.includes(price)) {
                     items[i].remove();
                    prices[i].remove();
                    break;
                 }
            }
}
    function calculateBill() {
            const selectedItemsList = document.getElementById('sil');
            const selectedPricesList = document.getElementById('spl');
            const billTextElement = document.getElementById('bill-text');
            let totalPrice = 0;
            let billText = "Your Bill\n";
            for (let i = 0; i < selectedItemsList.children.length; i++) {
                const item = selectedItemsList.children[i].textContent;
                const price = parseFloat(selectedPricesList.children[i].textContent);
                const itemTotalPrice = price;
                totalPrice += itemTotalPrice;
                billText += `${item}: Rs${price.toFixed(2)}\n`;

            }
            billText += `Total: Rs${totalPrice.toFixed(2)}\n`;

            billTextElement.textContent = billText;
            const billContainer = document.getElementById('bill-container');
            billContainer.classList.remove('bill-container-hidden');
            billContainer.classList.add('bill-container-visible'); 
        }
        function checkout() {
            const selectedItemsList = document.getElementById('sil');
            const selectedPricesList = document.getElementById('spl');
            if (!selectedItemsList || !selectedPricesList) {
                console.error("Error: Selected items or prices list not found!");
                return;
            }
            const items = [];
            const prices = [];
            // Retrieve items and prices from the lists
            for (let i = 0; i < selectedItemsList.children.length; i++) {
                const itemText = selectedItemsList.children[i].textContent.trim();
                const priceText = selectedPricesList.children[i].textContent.trim();
                // Push item and price into respective array
                items.push(itemText);
                prices.push(priceText);
            }
            const params = new URLSearchParams();
            params.append('items', items.join(','));
            params.append('prices', prices.join(','));
            window.location.href = `checkout.html?${params.toString()}`;
        }
    }