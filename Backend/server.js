// server.js (Node.js with Express)
const express = require('express');
const cors = require('cors');
// const db = require('./db'); // Your database connection file
const Dairy = require('./DairyModel'); // Your Mongoose model

const app = express();

app.use(cors());
app.use(express.json());

// API route to add a dairy entry
app.post('/api/dairy', async (req, res) => {
  try {
    const { product_name, fat_content } = req.body;
console.log(req.body)
    // Create a new Dairy entry
    const dairyEntry = new Dairy({
      product_name,
      fat_content,
    });

    // Save the entry to the database
    await dairyEntry.save();

    res.status(201).json(dairyEntry);
    console.log(dairyEntry,"dairyEntry");
  } catch (error) {
    console.error('Error adding dairy entry:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.get('/api/dairy', async (req, res) => {
    try {
      // Fetch all dairy entries from the database
      const dairyEntries = await Dairy.find();
  
      res.status(200).json(dairyEntries);
    } catch (error) {
      console.error('Error fetching dairy entries:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  app.delete('/api/dairy/:id',async (req,res)=>{
    try {
      const {id}=req.params;
      await Dairy.findByIdAndDelete(id)
      res.status(200).json({message:'dairy entry deleted successfullly'})
    }catch(error){
      console.error('error deleting dairy enntry',error);
      res.status(500).json({error:'Internal server error'})

    }
  })

const PORT = process.env.PORT || 5000;
console.log(process.env.PORT);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  
