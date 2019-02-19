import smtplib
import time
data="You have  a recieved a mail. Please collect it from your hostel reception."
user="vbhvsolanki7500@gmail.com"
ps="hCk@123@tgr@456@27@"
while(1):
	file = open('temp.txt', "r") 
	msg  = file.read()
	open('temp.txt', 'w').close()
	if(msg!=''):
		s = smtplib.SMTP('smtp.gmail.com', 587)
		s.ehlo()
		s.starttls()
		s.ehlo()
		s.login(user,ps)
		s.sendmail("vbhvsolanki7500@gmail.com",msg,data)#sender's then reciever's e-mail address
		s.quit()
		print("Email Sent...")
	time.sleep(2)
	
