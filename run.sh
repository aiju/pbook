#!/bin/bash
htlatex index.tex tex4ht.cfg,2 "" "-d www/" "-interaction=nonstopmode"
cp util.js www
