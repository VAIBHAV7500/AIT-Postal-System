import smtplib
import time
data="You have  a recieved a mail. Please collect it from your hostel reception."
user="example@xyz.com"#username
ps="password"#password
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
	
