#!/bin/bash
mkdir -p www
htlatex index.tex tex4ht.cfg,3 "" "-d www/" "-interaction=nonstopmode"
cp util.js style.css www
