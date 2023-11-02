require "rspec"

RSpec.describe "Shortener" do
    
 it "shortens a given URL with a 7 character lookup code " do

 url = "https://www.favouritewebsite.com/articles/coustemer-satisfaction"
 shortener = "https://test.tin.ee/343hhut"
 expect(shortener).to eq("https://test.tin.ee/343hhut") 
 end


 it "gives each URL its own lookup code " do

    url = "https://www.favouritewebsite.com/articles/coustemer-satisfaction"
    shortener = "3j3hhut"
    code_1 = shortener

    url = "https://www.favouritewebsite.com/articles/coustemer-satisfaction"
    shortener = "3i3hhut"
    code_2 = shortener

    expect(code_2).not_to eq(code_1)
 end
end 
