print "Digite um número inteiro positivo para começar a contagem regressiva: "
num = gets.chomp.to_i

if num <= 0
  puts "O número precisa ser positivo."
else
  while num >= 0
    puts num
    num -= 1
    sleep(1) # aguarda 1 segundo
  end
  puts "KABUM"
end


  