const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const port = 4000;

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://iddoavital12:iddo2605@cluster0.3owi1cu.mongodb.net/CRM', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
 .then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

const inquirySchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  status: {
    type: String,
    enum: ['new', 'in-progress', 'resolved'],
    default: 'new',
  },
});

const Inquiry = mongoose.model('Inquiry', inquirySchema);


app.post('/api/inquiries', async (req, res) => {
  try {
    const inquiry = new Inquiry(req.body);
    await inquiry.save();
    res.status(201).json(inquiry);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create inquiry' });
  }
});

app.get('/api/inquiries', async (req, res) => {
  try {
    const inquiries = await Inquiry.find();
    res.json(inquiries);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch inquiries' });
  }
});

app.listen(port, (error) => {
    if (!error) {
      console.log("🚀 Server is running on port " + port);
    } else {
      console.log("❌ Error: " + error);
    }
  });
 
  app.use((req, res) => {
    res.status(404).json({ error: "Not Found" });
  });
  



