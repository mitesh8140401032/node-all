import * as fs from 'fs/promises'

// ********************************
// Folder inner Side file Create
// try {
//     await fs.mkdir("D:/Mitesh/Node/Fill System/Promise_Api/promis.txt", { recursive: true });
//     console.log("mkDir Created")
// } catch (error) {
//     console.log(error)
// }

// ********************************

// Folder inner Side file Read
// try {
//     const files = await fs.readdir("D:/Mitesh/Node/Fill System/Promise_Api")
//     for (const file of files) {
//         console.log(file)
//     }
// } catch (error) {
//     console.log(error)
// }

// ********************************

// Folder inner Side file Remove
// try {
//     await fs.rmdir("D:/Mitesh/Node/Fill System/Promise_Api/promis.txt")
//     console.log("Delete SucessFully")
// }
// catch (error) {
//     console.log(error)
// }



// ********************************

//  File Promise use to Create & writeFile
// try {
//     await fs.writeFile("donation.txt", "Hello")
//     console.log("Created Files Sucessfully")
// } catch (error) {
//     console.log(error)
// }

// ********************************

//  File Promise use to ReadFile
// try {
//     const a = await fs.readFile('donation.txt', "utf-8")
//     console.log(a)
// } catch (error) {
//     console.log(error)
// }

// ********************************

//  File Promise use to Append Data into File
// try {
//     await fs.appendFile('donation.txt', " Mitesh_Akbari")
// } catch (error) {
//     console.log(error)
// }

// ********************************

// File Promise use to Copy File
// try {
//     await fs.copyFile("donation.txt", "mitesh.txt")
//     console.log("Copy File")
// } catch (error) {
//     console.log(error)
// }

// ********************************

// File Promise use to Get File Information

// try {
//     let a = await fs.stat("D:/Mitesh")
//     console.log(a)
//     console.log(a.isDirectory())
//     console.log(a.isFile())
// } catch (error) {
//     console.log(error)
// }