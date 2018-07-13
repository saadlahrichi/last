def main():
    sum=0
    num=0
    g=input("Enter a grade (enter an empty string to stop):")
    while g!="" :
        g=eval(g)
        sum=sum+g
        num=num+1
        g=input("Enter a grade(enter an empty string to stop):")
    if num==0:
        print("you need to enter a grade")
    else:
        print("The averge is", sum/num)
    
def game():
    b=12
    for i in range(3):
         a=eval(input("Can you try to guess the winning number ?"))
         if a<b :
                print("You're close ! Try again!You're still have",2-i,"guesses",a,  "<", b)
         elif a>b:
                print("You're close ! Try again!You're still have",2-i,"guesses",a, ">", b)
         elif a==b:
                print("Congratulations!You won!")
                break

def b():
    b=12
    a=eval(input("Can you try to guess the winning number ?"))
    g=3
    while a!=b:
        if a<b :
            print("You're close ! Try again!",a,  "<", b)
            g=g-1
            print("You're still have",g," guesses")
            if g==0:
                print("You lose")
                break
       elif a>b:
           print("You're close ! Try again!",a, ">", b)
           g=g-1
           print("You're still have",g," guesses")
           if g==0:
               print("You lose")
               break
        a=eval(input("Can you try to guess the winning number ?"))
    if a==b:
        print("Congratulations! You won!")

        
            
    

    
        
               
    

           
        
