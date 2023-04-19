#!/bin/bash

if [ ${1,,} = utku ]; then
	echo "Hi there Jesus"
elif [ ${1,,} = help ]; then
	echo "who are you?"
else
	echo "wtf???"
fi
