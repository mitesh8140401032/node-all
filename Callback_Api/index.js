
import * as fs from 'fs';


// Created Directory
// fs.mkdir('D:/Mitesh/Node/Fill System/Callback_Api/demo/callback.txt', { recursive: true }, (error) => {
//     if (error) throw error;
//     console.log("Directory Created")
// })

// Read Content of Directory
// fs.readdir("D:/Mitesh/Node/Fill System/Callback_Api/demo/callback.txt", (error, files) => {
//     if (error) throw error;
//     // console.log("Read Directory")
//     for (const file of files)
//         console.log(file)
// })

// Remove Directory
// fs.rmdir("D:/Mitesh/Node/Fill System/Callback_Api/demo/callback.txt", (error) => {
//     if (error) throw error;
//     console.log("Delete Directory")
// })

// Create and Write Files
// fs.writeFile("my.txt", "Hello", (error) => {
//     if (error) throw error;
//     console.log("Create Files")
// })

// Read Files
// fs.readFile("my.txt", "utf-8", (error, data) => {
//     if (error) throw error;
//     for (const file of data)
//         console.log(file)
// })

// Append Data into Files
// fs.appendFile("my.txt", "  Mitesh Akbari", (error) => {
//     if (error) throw error;
//     console.log("Append Data")
// })

// Copy Files
// fs.copyFile("my.txt", "Mitesh.txt", (error) => {
//     if (error) throw error;
//     console.log("Copy ")
// })

// Get Files Information
// fs.stat('D:/Mitesh/Node/Fill System/Callback_Api/index.js', (error, data) => {
//     if (error) throw error;
//     console.log(data)
// })