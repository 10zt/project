package com.project.demo.entity;

import com.alibaba.fastjson.annotation.JSONField;
import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.*;

import java.io.Serializable;
import java.sql.Timestamp;


/**
 * 学生分数：(StudentScore)表实体类
 *
 */
@TableName("`student_score`")
@Data
@EqualsAndHashCode(callSuper = false)
public class StudentScore implements Serializable {

    // StudentScore编号
    @TableId(value = "student_score_id", type = IdType.AUTO)
    private Integer student_score_id;

    // 学生用户
    @TableField(value = "`student_users`")
    private Integer student_users;
    // 学生姓名
    @TableField(value = "`student_name`")
    private String student_name;
    // 平均分数
    @TableField(value = "`average_score`")
    private Integer average_score;
    // 最高得分
    @TableField(value = "`highest_score`")
    private Integer highest_score;
    // 最低分数
    @TableField(value = "`minimum_score`")
    private Integer minimum_score;










    // 更新时间
    @TableField(value = "update_time")
    private Timestamp update_time;

    // 创建时间
    @TableField(value = "create_time")
    private Timestamp create_time;







}
