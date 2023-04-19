do shell script "open -na 'Google Chrome' --args --guest --new-window 'http://localhost:3000'"

delay 1

tell application "Google Chrome" to activate

tell application "System Events"
  perform action "AXPress" of button 2 of window 1 of application process "Google Chrome" -- Enabling fullscreen
  delay 1
  repeat 3 times
    key code 24 using {command down} -- zoom into 150%
  end repeat
end tell
