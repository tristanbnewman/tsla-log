//
//  Trade.swift
//  tsla-log
//
//  Created by Tristan Newman on 6/3/19.
//  Copyright © 2019 Tristan Newman. All rights reserved.
//

import Foundation

class Trade{
    var price : Float
    var date : String
    var period : Int
    
    init(price : Float, date : String, period : Int){
        self.price = price
        self.date = date
        self.period = period
    }
}
