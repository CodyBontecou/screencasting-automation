tell application "System Settings" to activate

--Open System Settings > Accessibility > Display section
do shell script "open x-apple.systempreferences:com.apple.preference.universalaccess?Seeing_Display"

--Wait for correct pane to load
delay 1

tell application "System Events"
	
	--Get current state of slider 
	set currentState to (get value of slider "Pointer size" of group 2 of scroll area 1 of group 1 of group 2 of splitter group 1 of group 1 of window "Display" of application process "System Settings" of application "System Events")
	
	--Determine key code to send
	if currentState is not greater than 1.0 then
		set keyCode to "116" as integer -- PageUp (increase size)
	else
		set keyCode to "121" as integer -- PageDown (decrease size)
	end if
	
	
	--set focus to slider
	tell slider "Pointer size" of group 2 of scroll area 1 of group 1 of group 2 of splitter group 1 of group 1 of window "Display" of application process "System Settings" to set focused of it to true
	
	delay 0.2
	
	--Send keycode to set size to max or min
	key code keyCode
end tell 

delay 1

tell application "System Settings"
  quit
end tell