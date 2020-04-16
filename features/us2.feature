Feature: As a user I want to be able to find different assortments of ”ballast” drinks and able to see how many of ballast drinks are available via assortment and via boutique

    Scenario:
        Given I go to the systembolaget page
        When I search 'ballast' on the search field
        Then I can see how many assortment of ballast drinks via sortimentet
        And I can see how many assortment of ballast drinks via boutique