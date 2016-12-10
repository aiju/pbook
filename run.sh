#!/bin/bash
mkdir -p www
htlatex index.tex tex4ht.cfg,2 "" "-d www/" "-interaction=nonstopmode"
cp util.js style.css www
