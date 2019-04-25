'use strict';

const express = require('express');

const router = express.Router();

// API Routes
router.get('/', handleGet);
router.post('/save', handlePost);

// Route Handlers

function handleGet(req,res) {
  res.send('Hello World!')
}

function handlePost(req,res) {
  res.send('Hello Post!')
}