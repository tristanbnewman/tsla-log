//
//  Trade.swift
//  tsla-stock
//
//  Created by Tristan Newman on 6/7/19.
//  Copyright © 2019 Tristan Newman. All rights reserved.
//

import Foundation

class Trade {
    var date : String = "1/1/1"
    var price : Float = 0.0
    var period : Int = 0
    
    init(date : String, price : Float, period : Int) {
        self.date = date
        self.price = price
        self.period = period
        
    }
}
