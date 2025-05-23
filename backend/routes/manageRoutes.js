const express = require('express');
const router = express.Router();
const productCategoryControllers = require('../controllers/productCategoryControllers');
const productsControllers = require('../controllers/productController');
const unitControllers = require('../controllers/unitControllers');
const tableControllers = require('../controllers/tableController'); // เปลี่ยนเป็น tableControllers
const drinkControllers = require('../controllers/drinkController');
const foodCetagoryControllers = require('../controllers/foodCategoryControllers');
const ingredientsControllers = require('../controllers/ingredientsController');
const ingrediendetailsControllers = require('../controllers/ingredientDetControoller');
const foodrecipeControllers = require('../controllers/foodrecipeController');
const suppilerController = require('../controllers/suppilerController')
const EmployeeSupplierController = require('../controllers/employeeSupplierController')
const OrderProductController = require('../controllers/orderProductcontroller')
const deliverrynoteController = require('../controllers/deliverrynoteController')



// / ประเเภทสินค้า
router.get('/getcategories',productCategoryControllers.getCategories)

router.post('/createcategory',productCategoryControllers.createCategory)

router.put('/updatecategory/:id', productCategoryControllers.updateCategory)

router.delete('/deletecategory/:id', productCategoryControllers.deleteCategory)


// ดึงข้อมูลหน่วยสินค้าทั้งหมด
router.get('/getunits', unitControllers.getUnits);

// สร้างหน่วยสินค้าใหม่
router.post('/createunit', unitControllers.createUnit);

// อัปเดตหน่วยสินค้า
router.put('/updateunit/:id', unitControllers.updateUnit);

// ลบหน่วยสินค้า
router.delete('/deleteunit/:id', unitControllers.deleteUnit);


// / สินค้า 
router.post('/addproduct',productsControllers.addProduct)

router.get('/getproducts', productsControllers.getProducts)  

router.put('/updateproduct/:id', productsControllers.updateProduct)

router.delete('/deleteproduct/:id',productsControllers.deleteProduct)





// ดึงข้อมูลโต๊ะทั้งหมด
router.get('/gettables', tableControllers.getTables);

// สร้างโต๊ะใหม่
router.post('/createtable', tableControllers.registerTable);

// อัปเดตข้อมูลโต๊ะ
router.put('/updatetable/:id', tableControllers.updateTable);

// ลบโต๊ะ
router.delete('/deletetable/:id', tableControllers.deleteTable);



//ประเภทอาหาร 
router.get('/getfoodcategory', foodCetagoryControllers.getCategories)

router.post('/createfoodcategory', foodCetagoryControllers.createCategory)

router.put('/updatefoodcategory/:id', foodCetagoryControllers.updateCategory);

router.delete('/deletefoodcategory/:id', foodCetagoryControllers.deleteCategory);


//เตรียมวัตุถุดิบ 
router.get('/getingredients',ingredientsControllers.getIngredients);

router.post('/createingredients', ingredientsControllers.addIngredient);

router.put('/updateingredients/:id', ingredientsControllers.updateIngredient);

router.delete('/deleteingredients/:id', ingredientsControllers.deleteIngredient);


//รายละเอียดการเตรียม
router.get('/getIngredientDetails/:id', ingrediendetailsControllers.getIngredientDetailsByIngredientId)

router.post('/addIngredientDetail', ingrediendetailsControllers.addIngredientDetail)

router.put('/updateIngredientDetail/:id', ingrediendetailsControllers.updateIngredientDetail)

router.delete('/deleteIngredientDetail/:id', ingrediendetailsControllers.deleteIngredientDetail)

// router.put('/updateNewProduct/:id', ingrediendetailsControllers.updateNewProduct)

//จัดการสูตรอาหาร
router.get('/getFoodRecipes/:id', foodrecipeControllers.getFoodRecipesByFoodId)

router.post('/addFoodRecipe', foodrecipeControllers.addFoodRecipe)

router.put('/updateFoodRecipe/:id', foodrecipeControllers.updateFoodRecipe)

router.delete('/deleteFoodRecipe/:id', foodrecipeControllers.deleteFoodRecipe)

//ดึงข้อมูลร้านค้า
router.get('/getSuppliers', suppilerController.getSupplier)

router.post('/addSupplier', suppilerController.appSupplier)

router.put('/updateSupplier/:id', suppilerController.updateSupplier)

router.delete('/deleteSupplier/:id', suppilerController.deleteSupplier)

//ดึงข้อมูลพนักงานร้านค้า
router.get('/getEmployeeSuppliers', EmployeeSupplierController.getEmployeeSuppliers)

router.post('/addEmployeeSupplier', EmployeeSupplierController.addEmployeeSupplier)

router.put('/updateEmployeeSupplier/:id', EmployeeSupplierController.updateEmployeeSupplier)

router.delete('/deleteEmployeeSupplier/:id', EmployeeSupplierController.deleteEmployeeSupplier)


//จัดการออเดอร์สินค้า  ของเชฟ
router.get('/getOrderProduct',OrderProductController.getOrderProduct)

router.post('/createOrderProduct', OrderProductController.createOrderProduct)

router.delete('/deleteOrderProduct/:id', OrderProductController.deleteOrderProduct)


//จัดการรายละเอียดสินค้า
router.get('/getOrderProductDetail/:id', OrderProductController.getOrderProductDetail)

router.post('/createOrderProductDetails', OrderProductController.createOrderProductDetails)

router.put('/updateOrderProductDetails/:id', OrderProductController.updateOrderProductDetails)

router.delete('/deleteOrderProductDetail/:id', OrderProductController.deleteOrderProductDetail)

// อัพเดตข้อมูลสสถานะฝั่งเจ้าของร้าน
router.put('/updateStatusInProgressOrderProduct/:id', OrderProductController.updateStatusInProgressOrderProduct)

router.put('/updateStatusCompletedOrderProduct/:id', OrderProductController.updateStatusCompletedOrderProduct)


//ใบส่งของ
router.get('/getDeliveryNote', deliverrynoteController.getDeliveryNote)

router.post('/postDeliveryNote', deliverrynoteController.postDeliveryNote)


//รายละเอียดใบ่สงของ
router.get('/getDeliveryNoteDetail/:id', deliverrynoteController.getDeliveryNoteDetail)

router.post('/createDeliveryNoteDetail', deliverrynoteController.createDeliveryNoteDetail)

router.put('/updateDeliveryNoteDetail/:id', deliverrynoteController.updateDeliveryNoteDetail)

router.delete('/deleteDeliveryNoteDetail/:id', deliverrynoteController.deleteDeliveryNoteDetail)


module.exports = router;
