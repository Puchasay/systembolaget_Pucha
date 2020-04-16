Feature: As a user I want to be able to search "Nanny state" drink and put it on a shopping bag then verify that there are more than 10 pieces of "Nanny state" in Hansa systembolaget boutique

    Scenario:
        Given I go to the systembolaget start page
        When I search for Nanny state drink and put it on a shopping bag
        And I click on the VARUKORG button then search for Hansa boutique
        Then I verify if there are more than ten pieces of Nanny state drink in Hansa systembolaget boutique